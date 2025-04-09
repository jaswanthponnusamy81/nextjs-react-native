import {Button, ButtonText} from './../ui/button';
import {useToast, Toast, ToastTitle, ToastDescription} from './../ui/toast';
import React from 'react';

export default function ToastDemo() {
  const toast = useToast();
  const [toastId, setToastId] = React.useState(0);
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: 'top',
      duration: 3000,
      render: ({id}) => {
        const uniqueToastId = 'toast-' + id;
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };
  return (
    <Button onPress={handleToast}>
      <ButtonText>Press Me for Toast</ButtonText>
    </Button>
  );
}
