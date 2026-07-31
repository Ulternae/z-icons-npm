import React from 'react';

export const LanUtilityCanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280.5 0c30.9 0 56 25.1 56 56v40.9c13.1 2.2 25.3 8.3 34.7 17.8l58.5 58.5c12 12 18.7 28.3 18.7 45.2v229.5c0 33.1-25.2 60.4-57.5 63.7l-6.5.3h-256c-33.1 0-60.4-25.2-63.7-57.5l-.3-6.5v-288c0-32.6 24.4-59.5 56-63.4V55.9c0-30.9 25.1-56 56-56h104zm-152 144c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V218.5c0-4.2-1.7-8.3-4.7-11.3l-58.5-58.5c-3-3-7.1-4.7-11.3-4.7zm207 79c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-25 25V358l25 25c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-25-25H202.4l-25 25c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25-25v-76.1l-25-25c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l25 25h108.1zm-119 121h80v-48h-80zm183-297c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9m-223 1c-4.4 0-8 3.6-8 8v40h120V56c0-4.4-3.6-8-8-8z"})
);

export default LanUtilityCanRegular;
