import React from 'react';

export function LanAmpersandThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 112v2.9c0 26.7 10.8 52.2 29.9 70.9l36.5 35.5 55.1-15.5c41.7-11.7 70.5-50 70.5-93.4 0-53.1-43-96.4-96-96.4s-96 43-96 96m125.8 109.2-46.2 13 146.8 142.9 64.4-55.2c3.4-2.9 8.4-2.5 11.3.9s2.5 8.4-.9 11.3l-63.3 54.2 63.6 62c3.2 3.1 3.2 8.1.2 11.3s-8.1 3.2-11.3.2l-64.7-63-43.9 37.7C213 464.5 171.2 480 128 480h-1.7C56.6 480 0 423.4 0 353.7 0 297 37.6 247.4 92.1 232l20.5-5.8-29.9-29.1C60.5 175.6 48 145.9 48 114.9V112C48 50.1 98.1 0 160 0s112 50.6 112 112.4c0 50.5-33.6 95.1-82.2 108.8M128 464c39.4 0 77.5-14.1 107.4-39.7l42.8-36.7-152.4-148.4-29.4 8.3C48.9 260.8 16 304.2 16 353.7 16 414.6 65.4 464 126.3 464z"})
  );
}

export default LanAmpersandThin;
