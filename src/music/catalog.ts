


export type SoundChoice =
  | "rain"
  | "ocean"
  | "campfire"
  | "silence"
  | "brown"
  | "pink"
  | "lofi"
  | "white"

export const SOUND_SOURCES: Record<SoundChoice, string[]> = {
  rain: ["/timeblind/misc/rain.mp3"],
  ocean: ["/timeblind/misc/waves.mp3"],
  campfire: ["/timeblind/misc/fireplace.mp3"],

  brown: ["/timeblind/noise/Brown.mp3"],
  pink: ["/timeblind/noise/Pink.mp3"],
  white: ["/timeblind/noise/White.mp3"],

  lofi: [
    '/timeblind/lofi/lofi1.mp3',
    '/timeblind/lofi/lofi2.mp3',
    '/timeblind/lofi/lofi3.mp3',
  ],

  silence: [],
}

