import React from 'react';

export const LanMessageBotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 543.991',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 128c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H359.6c-9.9 0-19.6 3.1-27.7 8.8L240 473.7V424c0-13.3-10.7-24-24-24h-40c-26.5 0-48-21.5-48-48zm48-96c-53 0-96 43-96 96v64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v112c0 53 43 96 96 96h16v72c0 9 5 17.2 13 21.3s17.6 3.5 24.9-1.7L359.6 448H464c53 0 96-43 96-96V240h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-64c0-53-43-96-96-96zm80 96c-53 0-96 43-96 96s43 96 96 96h128c53 0 96-43 96-96s-43-96-96-96zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanMessageBotRegular;
