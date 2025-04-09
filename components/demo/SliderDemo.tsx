import {Center} from './../ui/center';
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from './../ui/slider';

export default function SliderDemo() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Slider
        defaultValue={30}
        size="md"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  );
}
