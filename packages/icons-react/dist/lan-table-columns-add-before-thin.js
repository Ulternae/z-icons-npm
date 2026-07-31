import React from 'react';

export const LanTableColumnsAddBeforeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M121.5 32.3c-30.1 3.1-54.1 27-57.1 57.1L64 96h16c0-26.5 21.5-48 48-48h152v416H128c-24.9 0-45.3-18.9-47.8-43.1L80 416H64l.3 6.5C67.6 454.8 94.9 480 128 480h320c35.3 0 64-28.7 64-64V96l-.3-6.5C508.4 57.2 481.1 32 448 32H128zM448 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H296V48zM96 168c-4.4 0-8 3.6-8 8v72H16c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-72c0-4.4-3.6-8-8-8"})
);

export default LanTableColumnsAddBeforeThin;
