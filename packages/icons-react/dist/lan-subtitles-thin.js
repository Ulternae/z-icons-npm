import React from 'react';

export const LanSubtitlesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm0 296c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-4.4 0-8 3.6-8 8m176 0c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H248c-4.4 0-8 3.6-8 8m200-88h-96c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8m-176 0H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8"})
);

export default LanSubtitlesThin;
