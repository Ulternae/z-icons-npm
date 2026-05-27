import React from 'react';

export const CoreFilterRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96v17.9c0 19.4 8.9 37.8 24 50l124 99.2 12 9.6v123.6l64 32V272.7l12-9.6 124-99.2c15.2-12.1 24-30.5 24-50V96z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 32c35.3 0 64 28.7 64 64v17.9c0 38.9-17.7 75.6-48 99.9l-112 89.6v228.4l-192-96V303.4L48 213.8c-30.3-24.3-48-61-48-99.9V96c0-35.3 28.7-64 64-64zM64 113.9c0 19.4 8.9 37.8 24 50l124 99.2 12 9.6v123.6l64 32V272.7l12-9.6 124-99.2c15.2-12.1 24-30.5 24-50V96H64z"})
);

export default CoreFilterRegularDuo;
