import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Send } from "lucide-react";

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log("Form Data:", values);
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-6"
    >
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Have a project or just want to say hi? Fill out the form below.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-6 space-y-4">
              <div>
                <label className="block font-medium">Your Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Your Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block font-medium">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </Form>
          )}
        </Formik>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 text-center mt-4"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}

        <div className="flex justify-center mt-6">
          <a
            href="mailto:your@email.com"
            className="flex items-center space-x-2 text-blue-500 hover:underline"
          >
            <Mail className="w-5 h-5" />
            <span>your@email.com</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
