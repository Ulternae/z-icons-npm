import React from 'react';

export const LanFileCode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm92.1 290.4c5.8-6.7 5-16.8-1.7-22.6s-16.8-5-22.6 1.7l-48 56c-5.1 6-5.1 14.8 0 20.8l48 56c5.8 6.7 15.9 7.5 22.6 1.7s7.5-15.8 1.7-22.6L117 335.8l39.1-45.6zm96-20.8c-5.8-6.7-15.8-7.5-22.6-1.7s-7.5 15.8-1.7 22.6l39.1 45.6-39.1 45.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l48-56c5.1-6 5.1-14.8 0-20.8l-48-56z"})
);

export default LanFileCode;
