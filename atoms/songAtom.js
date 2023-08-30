import { atom } from "recoil";

export const currentTrakIdState = atom({
  key: "currentTrakIdState",
  default: null,
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
