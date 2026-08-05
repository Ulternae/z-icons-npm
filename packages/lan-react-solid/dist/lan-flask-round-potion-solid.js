import React from 'react';

export function LanFlaskRoundPotionSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 0C78.3 0 64 14.3 64 32s14.3 32 32 32v89.7C38.7 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.7-133.1-96-166.3V64c17.7 0 32-14.3 32-32S305.7 0 288 0zm64 173.3V64h64v109.3c0 12.7 7.5 24.2 19.2 29.3C288.5 222.4 320 267.5 320 320c0 5.4-.3 10.8-1 16h-18.7c-29 0-57.5-7.9-82.3-22.8l-9.6-5.8C187.2 294.7 163 288 138.3 288c-17.3 0-34.5 3.3-50.6 9.7l-23 9.2c4.7-46.8 34.7-86.2 76.2-104.3 11.7-5.1 19.2-16.6 19.2-29.3z"})
  );
}

export default LanFlaskRoundPotionSolid;
