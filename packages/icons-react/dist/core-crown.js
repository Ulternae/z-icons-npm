import React from 'react';

export const CoreCrown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M363.2 208.1c-19-16.2-54.7-46.9-107.2-91.9-52.5 45-88.2 75.6-107.2 91.9-29.5-19.6-51.2-34.1-65.2-43.5l34.5 241.5 64.3-10.7c48.8-8.1 98.5-8.1 147.3 0l64.3 10.7 34.5-241.5c-14 9.4-35.8 23.9-65.2 43.5zm77.3-128.5L512 32c-3 21.1-21.3 148.9-54.7 383.2-5.1 35.6-38.4 60-73.9 54.1l-64.3-10.7c-41.8-7-84.5-7-126.3 0l-64.3 10.7c-35.3 5.8-68.7-18.6-73.8-54.1C21.3 180.9 3 53.2 0 32q71.25 47.4 144 96l112-96 112 96z"})
);

export default CoreCrown;
