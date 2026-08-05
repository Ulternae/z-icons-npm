import React from 'react';

export function LanPhoneWaveformSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480-8v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V-8c0-13.3 10.7-24 24-24s24 10.7 24 24m80 32v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M400 40v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V40c0-13.3 10.7-24 24-24s24 10.7 24 24m240 32v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V72c0-13.3 10.7-24 24-24s24 10.7 24 24M176.1 1.4c19.7-5.4 40.3 4.7 48.1 23.5l40.5 97.3c6.9 16.5 2.1 35.6-11.8 47l-44.1 36.1c32.5 71.6 89 130 159.3 164.9l38.6-47.2c11.3-13.9 30.4-18.6 47-11.8l97.3 40.6c18.8 7.8 28.9 28.4 23.5 48.1l-1.5 5.5c-17.6 64.6-80.2 119.8-156.4 103.7-175-37.1-312.7-174.8-349.8-349.8C50.6 83 105.9 20.5 170.5 2.9l5.5-1.5z"})
  );
}

export default LanPhoneWaveformSolid;
