import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  // const user = useSelector((state: any) => state.user);

  // if (!user) return <Navigate to="/login" />;
  return children;
};

export default ProtectedLayout;
