import React from 'react';

export function LanTableRowsMergePrevious({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 96c0-35.3-28.7-64-64-64H64C30.9 32 3.6 57.2.3 89.5L0 96v320l.3 6.5c3.1 30.1 27 54.1 57.1 57.1l6.5.3h320c35.3 0 64-28.7 64-64v-320zm-32 320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V272h64v-32H32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v144h-64v32h64zM307.3 259.3c6.2-6.2 6.2-16.4 0-22.6l-72-72-2.5-2.1c-6.2-4.1-14.7-3.4-20.1 2.1l-72 72c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l44.7-44.7V336c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l44.7 44.7c6.2 6.2 16.4 6.2 22.6 0"})
  );
}

export default LanTableRowsMergePrevious;
