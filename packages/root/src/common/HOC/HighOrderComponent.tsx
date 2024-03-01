import { FC, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ToastContainer from "../../containers/common/ToastContainer";
import GlobalTheme from "../globalThemeContainer/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

interface HigherOrderComponentProps {
  children?: ReactNode;
}
const HigherOrderComponent: FC<HigherOrderComponentProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    // 페이지 로드 시 로직
  }, [location]);
  return (
    <>
      {children}
      <ThemeProvider theme={GlobalTheme}>
        <CssBaseline />
        <ToastContainer />
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default HigherOrderComponent;
