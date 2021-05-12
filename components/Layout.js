import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className="flex">
          <Sidebar />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
