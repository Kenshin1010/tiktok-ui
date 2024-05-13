import Header from "../components/Header/Header";
import Sidebar from "./Sibar/Sidebar";

export type DefaultLayoutProps = {
  children: React.ReactElement;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="DefaultLayout">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
