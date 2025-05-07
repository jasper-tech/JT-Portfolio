import { FC } from "react";
import { Download } from "lucide-react";

interface Skill {
  name: string;
}

const CV: FC = () => {
  const handleDownload = (): void => {
    const cvUrl = "/Jasper_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Jasper_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills: Skill[] = [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "MongoDB" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-10">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center">Sandy Afeawo </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Full-Stack Developer | React | Next.js | Node.js
        </p>

        {/* Download Button */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-6">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">
              Experience
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Software Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                XYZ Company | 2022 - Present
              </p>
              <p>
                Developed full-stack applications using React, Node.js, and
                MongoDB. Optimized performance and improved UI/UX.
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-semibold">
                BSc Computer Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kwame Nkrumah University of Science and Technology (KNUST) |
                2024
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
