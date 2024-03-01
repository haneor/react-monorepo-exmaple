import { create } from 'zustand';

export enum DialogType {
  NORMAL = 'NORMAL',
  DELETE = 'DELETE',
}

interface ToastStoreStatus {
  open: boolean;
  onClose: () => void;
  callback: () => void;
  setCallback: (callback: () => void) => void;
  title: string;
  subTitle: string;
  setTitle: (text: string) => void;
  onOpen: () => void;
  confirm: (title: string, callback: () => void) => void;
  dialogType?: DialogType;
  deleteDialog: (title: string, subTitle: string, callback: () => void) => void;
}

export const useToastStore = create<ToastStoreStatus>()(
  (setState, getState, store) => ({
    open: false,
    title: '',
    subTitle: '',
    callback: () => {},
    setTitle: (text) => setState({ title: text }),
    onOpen: () => setState({ open: true }),
    onClose: () => {
      setState({ open: false });
    },
    setCallback: (func) => {
      setState({ callback: func });
    },
    confirm: (title, callback) =>
      setState({
        dialogType: DialogType.NORMAL,
        title,
        callback: async () => {
          await callback();
          await setState({ dialogType: undefined });
        },
        open: true,
      }),
    deleteDialog: (title, subTitle, callback) =>
      setState({
        dialogType: DialogType.DELETE,
        title,
        subTitle,
        callback: async () => {
          await callback();
          await setState({ dialogType: undefined });
        },
        open: true,
      }),
  }),
);