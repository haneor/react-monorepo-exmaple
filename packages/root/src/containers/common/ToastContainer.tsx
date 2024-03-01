import * as React from 'react';
import { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from '@mui/material';
import {DialogType, useToastStore} from "../../stores/common/toast.store";

const DialogWrapper = styled(Dialog)`
	.MuiPaper-root {
    background-color: wheat;
		width: 320px;
		border-radius: 16px;
		box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.25);
	}
`;

const ToastContainer: () => (JSX.Element | null) = () => {
  const { open, onClose, title, subTitle, callback, dialogType } =
    useToastStore();

  const handleSuccess = async () => {
    await callback();
    await onClose();
  };

  if (dialogType === DialogType.DELETE) {
    return (
      <>
        <DialogWrapper open={open} onClose={onClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{subTitle}</DialogContent>
          <DialogActions>
            <Button onClick={onClose}>취소</Button>
            <Button style={{ color: '#FF0000' }} onClick={handleSuccess}>
              삭제
            </Button>
          </DialogActions>
        </DialogWrapper>
      </>
    );
  }
  if (dialogType === DialogType.NORMAL) {
    return (
      <>
        <DialogWrapper open={open} onClose={onClose}>
          <DialogContent>
            <Typography>{title}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>취소</Button>
            <Button onClick={handleSuccess}>확인</Button>
          </DialogActions>
        </DialogWrapper>
      </>
    );
  }

  return null;
};

export default ToastContainer;
