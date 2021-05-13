import Image from "next/image";
import Link from "next/link";
import { FaKeyboard, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-56 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 ">
      <div className="flex flex-col items-center mb-14 mt-14 -mx-2 ">
        <Image
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
          width={100}
          height={100}
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
          John Doe
        </h4>
        <p className="mx-2 mb-4 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link href="/">
            <a className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
              <FaKeyboard />
              <span className="mx-4 font-medium">Practice</span>
            </a>
          </Link>

          <Link href="/auth">
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
              <FaUser />
              <span className="mx-4 font-medium">Profile</span>
            </a>
          </Link>

          <Link href="/setting">
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
              <FaCog />
              <span className="mx-4 font-medium">Settings</span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
