import React from 'react';

export const CoreVideoSlashRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96.3 167.8 344.5 416H96.3zM296 96h88.2v88.2z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zM96.3 167.7V416h248.3l60.5 60.5c-4.5 1.6-9.3 2.7-14.2 3.2l-6.5.3h-288l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5V103.8l64 64zM384.3 32c35.3 0 64 28.7 64 64v45.7l160-45.7v312.3l-64-64V180.9l-96 27.4v40l-64-64V96.1H296l-64-64h152.3z"})
);

export default CoreVideoSlashRegular-duo;
