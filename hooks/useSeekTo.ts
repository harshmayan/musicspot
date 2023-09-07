import { Howl } from "howler";
import { roundTo3Dec } from "@/helpers";

const useSeek = (audio: Howl | null, setRangeValue: (num: number) => void) => {
  const onSeekTo = (rangeValue: number) => {
    if (!audio) return; // Handle the case when audio is null
    let seek = audio.duration() * rangeValue;
    audio.seek(seek);
    updateRangeValue();
  };

  const updateRangeValue = () => {
    if (!audio) return 0; // Handle the case when audio is null
    setRangeValue(roundTo3Dec(audio.seek() / audio.duration()));
  };

  const getSeek = () => {
    if (!audio) return 0; // Handle the case when audio is null
    return audio.seek();
  };

  const getDuration = () => {
    if (!audio) return 0; // Handle the case when audio is null
    return audio.duration();
  };

  return { onSeekTo, updateRangeValue, getSeek, getDuration };
};

export default useSeek;
