const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      {children}
    </div>
  );
};

export default Layout;
