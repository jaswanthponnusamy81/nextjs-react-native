'use client';

import {Box} from './../components/ui/box';
import {Text} from './../components/ui/text';
import AlertDialogDemo from './../components/demo/AlertDialogDemo.tsx';
import {Button, ButtonText} from './../components/ui/button';
import AccordionDemo from './../components/demo/AccordionDemo.tsx';
import ActionSheetDemo from './../components/demo/ActionSheetDemo.tsx';
import InputDemo from './../components/demo/InputDemo.tsx';
import SliderDemo from './../components/demo/SliderDemo.tsx';
import MenuDemo from './../components/demo/MenuDemo.tsx';
import ToastDemo from './../components/demo/ToastDemo.tsx';

export default function Home() {
  return (
    <Box className="flex flex-col p-4 w-full">
      <Box className="flex bg-black p-2">
        <Text className="text-white text-center">This is title</Text>
      </Box>
      <Box className="mt-4">
        <Button>
          <ButtonText>Hello</ButtonText>
        </Button>
      </Box>
      <Box className="mt-4">
        <AlertDialogDemo />
      </Box>
      <Box className="mt-4">
        <AccordionDemo />
      </Box>
      <Box className="mt-4">
        <ActionSheetDemo />
      </Box>
      <Box className="mt-4">
        <InputDemo />
      </Box>
      <Box className="mt-4">
        <SliderDemo />
      </Box>
      <Box className="mt-4">
        <MenuDemo />
      </Box>
      <Box className="mt-4">
        <ToastDemo />
      </Box>
    </Box>
  );
}
