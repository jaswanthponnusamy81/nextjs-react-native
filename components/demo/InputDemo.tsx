import {Input, InputField} from './../ui/input';

export default function InputDemo() {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}>
      <InputField placeholder="Enter Text here..." />
    </Input>
  );
}
