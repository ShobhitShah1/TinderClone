import {useToast} from 'react-native-toast-notifications';

export const useCustomToast = () => {
  const toaster = useToast();

  const showToast = (title: string, message: string, status: string) => {
    console.log('title, message', title, message);
    toaster.show(message, {
      type: 'custom_toast',
      title: title,
      status: status,
    });
  };

  return {
    showToast,
  };
};
