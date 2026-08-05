import React from 'react';

export function LanLipsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M30 220.1 132.6 97c17.4-20.9 43.3-33 70.6-33 18.3 0 36.2 5.5 51.4 15.7l33.6 22.7 33.6-22.7C337 69.5 354.9 64 373.2 64c27.3 0 53.1 12.1 70.6 33l102.4 123.1c17.3 20.8 17.3 50.9 0 71.7l-63 75.6c-42.5 51.1-105.5 80.6-172 80.6H265c-66.5 0-129.5-29.5-172.1-80.6L30 291.8c-17.3-20.8-17.3-50.9 0-71.7m89 20.6c-10.2 6.8-9.3 22.1 1.7 27.6l62.8 31.4c26.7 13.3 56.1 20.3 85.9 20.3h31.7c33.4 0 66.2-8.7 95.3-25.3l47.3-27c9.8-5.6 10.9-19.3 2.1-26.4L391 197.4c-4.2-3.4-9.9-4.4-15.1-2.7l-47.3 15.8c-26.3 8.8-54.7 8.8-81 0l-48.1-16c-4.7-1.6-9.8-.9-13.9 1.9z"})
  );
}

export default LanLipsSolid;
