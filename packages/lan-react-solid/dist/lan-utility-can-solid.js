import React from 'react';

export function LanUtilityCanSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280.5 0c30.9 0 56 25.1 56 56v40.9c13.1 2.2 25.3 8.3 34.7 17.8l58.5 58.5c12 12 18.7 28.3 18.7 45.2v229.5c0 35.3-28.7 64-64 64h-256c-35.3 0-64-28.7-64-64v-288c0-29.8 20.4-54.8 48-61.9V55.9c0-30.9 25.1-56 56-56h112zm89 223c-9.4-9.4-24.6-9.4-33.9 0l-25 25H202.5l-25-25c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25 25V358l-25 25c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l25-25h108.1l25 25c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25-25v-76.1l25-25c9.4-9.4 9.4-24.6 0-33.9m-73 121h-80v-48h80zm103-297c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9m-231 1c-4.4 0-8 3.6-8 8v40h128V56c0-4.4-3.6-8-8-8z"})
  );
}

export default LanUtilityCanSolid;
