import { IMessageProps, MessageType, useGlobalAlertData } from '../context/GlobalAlertData';

export const useGlobalAlert = () => {
  const { setMessage, setMessagetype, setOpen } = useGlobalAlertData();

  const createMessage = (text: string, title?: string): IMessageProps => ({ text, title });

  const createAlert = (message: IMessageProps, messageType: MessageType) => {
    setOpen(true);
    setMessage(message);
    setMessagetype(messageType);
  };

  const createSuccessAlert = (text: string, title?: string) =>
    createAlert(createMessage(text, title), 'success');

  const createInfoAlert = (text: string, title?: string) =>
    createAlert(createMessage(text, title), 'info');

  const createWarningAlert = (text: string, title?: string) =>
    createAlert(createMessage(text, title), 'warning');

  const createErrorAlert = (text: string, title?: string) =>
    createAlert(createMessage(text, title), 'error');

  return {
    createSuccessAlert,
    createInfoAlert,
    createWarningAlert,
    createErrorAlert,
  };
};
