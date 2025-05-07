import { FC, useState } from "react";
import { motion } from "framer-motion";
import { X, HelpCircle } from "lucide-react";

interface AssistantProps {}

const Assistant: FC<AssistantProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white dark:bg-gray-800 shadow-xl p-4 rounded-xl flex items-center space-x-4"
        >
          <img
            src="https://i.pravatar.cc/50" // Replace with your avatar image
            alt="Assistant Avatar"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-sm text-gray-900 dark:text-white">
            Need help navigating? Click on any menu item to explore the page!
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 dark:text-white hover:text-red-500"
          >
            <X size={20} />
          </button>
        </motion.div>
      ) : (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <HelpCircle size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Assistant;
