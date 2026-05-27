import React from 'react';

export const CoreCameraSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zM128.3 199.7V416h216.3l64 64H128.3c-35.3 0-64-28.7-64-64V160c0-7.3 1.3-14.2 3.5-20.8zM480.3 96h32c35.3 0 64 28.7 64 64v216.3l-64-64V160h-58.5l-64-64H296l-64-64h184.3z"})
);

export default CoreCameraSlash;
