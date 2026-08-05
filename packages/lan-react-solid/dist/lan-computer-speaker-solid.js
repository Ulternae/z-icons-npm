import React from 'react';

export function LanComputerSpeakerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M252.8 32H64C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h176v-64H64V96h176V80c0-17.5 4.7-33.9 12.8-48M240 432H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h132.8c-8.2-14.1-12.8-30.5-12.8-48m96-400c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 304a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m48-208a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
  );
}

export default LanComputerSpeakerSolid;
