import React from 'react';

export function LanTrashSlashThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.125 576.025 575.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L462.9 419.4 484.4 128h-16l-20.5 276.5L123.4 80H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H397.4L375.5 9.1C369.4-6 354.7-16 338.3-16H237.7c-16.4 0-31.1 10-37.1 25.1l-22 54.9h-71.2zm117.9 481.3-21.8-294.6-17.3-17.3 23.2 313.1c2.5 33.4 30.3 59.3 63.8 59.3h217.1c18.7 0 35.6-8 47.3-20.9l-11.3-11.3c-8.8 10-21.7 16.2-36 16.2H179.5c-25.1 0-46-19.4-47.9-44.5M237.7 0h100.6c9.8 0 18.6 6 22.3 15.1L380.2 64H195.8l19.6-48.9C219 6 227.9 0 237.7 0"})
  );
}

export default LanTrashSlashThin;
