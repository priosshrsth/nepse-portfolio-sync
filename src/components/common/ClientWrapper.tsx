"use client";

import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface IProps {
  children: ReactNode;
}
export function ClientWrapper({ children }: IProps) {
  return (
    <>
      <ToastContainer limit={3} pauseOnFocusLoss={true} autoClose={5000} newestOnTop={true} />
      {children}
    </>
  );
}
