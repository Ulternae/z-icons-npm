import React from 'react';

export const LanCoinVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M268.7 384c10.8-33.3 17.6-71.4 19-112h64c-1.4 41.7-8.1 79.9-18.3 112zm-55 96c16.5-16.2 30.9-38.1 42.6-64H321c-1.1 2.3-2.1 4.5-3.2 6.7-21.5 42.9-45.2 57.3-61.9 57.3zM0 256c0 141.4 64.5 256 144 256h112c70.7 0 128-114.6 128-256S326.7 0 256 0H144C64.5 0 0 114.6 0 256M256.4 96c-11.7-25.9-26.2-47.8-42.6-64H256c16.7 0 40.4 14.4 61.9 57.3 1.1 2.2 2.2 4.4 3.2 6.7zm31.3 144c-1.4-40.6-8.2-78.7-19-112h64.7c10.3 32.1 16.9 70.3 18.3 112zM144 480C82.1 480 32 379.7 32 256S82.1 32 144 32s112 100.3 112 224-50.1 224-112 224m80-224c0-97.2-35.8-176-80-176s-80 78.8-80 176 35.8 176 80 176 80-78.8 80-176m-80 136c-26.5 0-48-60.9-48-136s21.5-136 48-136 48 60.9 48 136-21.5 136-48 136"})
);

export default LanCoinVertical;
