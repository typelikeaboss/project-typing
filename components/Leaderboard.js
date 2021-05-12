import Image from "next/image";

const Leaderboard = () => {
  return (
    <div>
      <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="flex flex-col divide divide-y">
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <Image
                    width={100}
                    height={100}
                    alt="profil"
                    src="/test-photo.JPG"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">Jean Marc</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Developer
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                6:00 AM
              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <Image
                    width={100}
                    height={100}
                    alt="profil"
                    src="/test-photo.JPG"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">Designer</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Charlie Moi
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                6:00 AM
              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <Image
                    width={100}
                    height={100}
                    alt="profil"
                    src="/test-photo.JPG"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">CEO</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Marine Jeanne
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                6:00 AM
              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <Image
                    width={100}
                    height={100}
                    alt="profil"
                    src="/test-photo.JPG"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">CTO</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Boby PArk
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                6:00 AM
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
