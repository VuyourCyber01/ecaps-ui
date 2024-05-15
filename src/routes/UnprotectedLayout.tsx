// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { ReactNode } from "react";

const UnProtectedLayout = ({ children }: { children: ReactNode }) => {
  // const user = useSelector((state: any) => state?.user);

  // if (user) return <Navigate to="/" />;
  return children;
};

export default UnProtectedLayout;
