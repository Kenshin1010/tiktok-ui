import Header from "../components/Header/Header";

type HeaderOnlyProps = {
  children: React.ReactElement;
};

function HeaderOnly({ children }: HeaderOnlyProps) {
  return (
    <div className="HeaderOnly">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default HeaderOnly;
