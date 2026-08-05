import React from 'react';

export function LanUserTagThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 556.125',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144.1 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-336 352c0-88.4 71.6-160 160-160h96c0-5.5.6-10.8 1.6-16h-97.6c-97.2 0-176 78.8-176 176v24c0 4.4 3.6 8 8 8s8-3.6 8-8zm320-159.9c0-8.8 7.2-16 16-16h92.1c8.5 0 16.6 3.4 22.6 9.4l96 96c12.5 12.5 12.5 32.8 0 45.3l-76.1 76.1c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-6-6-9.4-14.1-9.4-22.6v-92.1zm-16 0v92.1c0 12.7 5.1 24.9 14.1 33.9l96 96c18.7 18.7 49.1 18.7 67.9 0l76.1-76.1c18.7-18.7 18.7-49.1 0-67.9l-96-96c-9-9-21.2-14.1-33.9-14.1h-92.1c-17.7 0-32 14.3-32 32zm96 47.9a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
  );
}

export default LanUserTagThin;
