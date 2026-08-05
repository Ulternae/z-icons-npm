import React from 'react';

export function LanTabletsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M368 240c-17.8 0-34.5-4.8-48.8-13.3L450.7 95.2c8.4 14.3 13.3 31 13.3 48.8 0 53-43 96-96 96m-96-96c0-53 43-96 96-96 17.8 0 34.5 4.8 48.8 13.3L285.3 192.8c-8.4-14.3-13.3-31-13.3-48.8m96 144a144 144 0 1 0 0-288 144 144 0 1 0 0 288M144 464c-44.7 0-82.3-30.6-93-72h186c-10.7 41.4-48.2 72-93 72M51 344c10.7-41.4 48.2-72 93-72s82.3 30.6 93 72zm93 168a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
  );
}

export default LanTabletsRegular;
