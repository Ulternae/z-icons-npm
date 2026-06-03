import React from 'react';

export const LanTableSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576.45 575.963',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7.5-24.9c9.4-9.4 24.6-9.4 33.9 0l62 62c7.7-3.3 16.2-5.1 25.1-5.1h320c35.3 0 64 28.7 64 64v320c0 8.9-1.9 17.3-5.2 25l62.1 62.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7.5 9.1c-9.4-9.4-9.4-24.6 0-33.9zm121 222.7V256h58.2l64 64H128.5v96h218.2l64 64H128.5l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5V133.9l64 64zm320 184.3v-62.2h-62.2zM322.3 256h126.2v-96H226.3z"})
);

export default LanTableSlashSolid;
