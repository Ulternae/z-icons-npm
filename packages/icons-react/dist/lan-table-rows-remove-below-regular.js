import React from 'react';

export const LanTableRowsRemoveBelowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 522.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 416c0 35.3 28.7 64 64 64h32v-48H64c-8.8 0-16-7.2-16-16V280h352v136c0 8.8-7.2 16-16 16h-32v48h32c33.1 0 60.4-25.2 63.7-57.5l.3-6.5V96l-.3-6.5c-3.1-30.1-27-54.1-57.1-57.1L384 32H64C28.7 32 0 60.7 0 96zM48 96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v136H48zm108.1 385.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 34 34c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.4-24.6 0-34L257.9 448l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L224 414.1l-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L190 448z"})
);

export default LanTableRowsRemoveBelowRegular;
