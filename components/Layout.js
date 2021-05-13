import Sidebar from "./Sidebar";
import Keyboard from "./KeyBoard/Keyboard";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className="flex">
          <Sidebar />
          {/* {children} */}
          <Keyboard />
        </main>
      </div>
    </>
  );
};

export default Layout;
