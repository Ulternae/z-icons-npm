import React from 'react';

export const LanFileArrowUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm211.3 316.7-72-72c-6.2-6.2-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l44.7-44.7V416c0 8.8 7.2 16 16 16s16-7.2 16-16V294.6l44.7 44.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"})
);

export default LanFileArrowUp;
