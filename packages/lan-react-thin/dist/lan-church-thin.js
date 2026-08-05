import React from 'react';

export function LanChurchThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256-32c4.4 0 8 3.6 8 8v40h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v67.6l133.4 84.2c11.6 7.3 18.6 20.1 18.6 33.8V251l69.5 34.7c16.3 8.1 26.5 24.8 26.5 42.9V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V328.7c0-18.2 10.3-34.8 26.5-42.9L96 251.1v-33.4c0-13.7 7-26.5 18.6-33.8L248 99.6V32h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-40c0-4.4 3.6-8 8-8m160 528h48c17.7 0 32-14.3 32-32V328.7c0-12.1-6.8-23.2-17.7-28.6L416 268.9zm-16 0V217.6c0-8.2-4.2-15.9-11.2-20.3L256 113.5l-132.8 83.8c-7 4.4-11.2 12.1-11.2 20.3V496h80V384c0-35.3 28.7-64 64-64s64 28.7 64 64v112zM33.7 300.1C22.8 305.5 16 316.6 16 328.7V464c0 17.7 14.3 32 32 32h48V268.9zM304 496V384c0-26.5-21.5-48-48-48s-48 21.5-48 48v112z"})
  );
}

export default LanChurchThin;
