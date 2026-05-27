import React from 'react';

export const CoreHeartSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM115.8 187.3c-.3 24 8.7 48.2 27 66.5l177.4 177.4 19.7-19.8 45.3 45.3-65 65L97.6 299.1C52.8 254.2 40.9 189 61.8 133.3zM331.3 68.9c61.5-52 153.6-49 211.5 8.9 61.1 61.1 61.1 160.2 0 221.2l-21.9 21.9-45.3-45.3 21.9-21.9c36.1-36.1 36.1-94.7 0-130.8s-94.7-36.1-130.7 0l-21.9 21.9-44.8-44.8 31.2-31.2z"})
);

export default CoreHeartSlash;
