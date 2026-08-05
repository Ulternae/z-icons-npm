import React from 'react';

export function LanTableRowsMergeNextThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 416c0 35.3-28.7 64-64 64H64C30.9 480 3.6 454.8.3 422.5L0 416V96l.3-6.5c3.1-30.1 27-54.1 57.1-57.1L64 32h320c35.3 0 64 28.7 64 64zM432 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v152h80v16H16v152c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V264h-80v-16h80zM301.7 266.3c3.1 3.1 3.1 8.2 0 11.3l-72 72-1.3 1c-3.1 2.1-7.3 1.7-10.1-1l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l58.4 58.4V168c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l58.3-58.3c3.1-3.1 8.2-3.1 11.3 0z"})
  );
}

export default LanTableRowsMergeNextThin;
