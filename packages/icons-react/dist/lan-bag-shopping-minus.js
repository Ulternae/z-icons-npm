import React from 'react';

export const LanBagShoppingMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 64v64h128V64c0-35.3-28.7-64-64-64s-64 28.7-64 64m160 96H48c-8.8 0-16 7.2-16 16v208c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V176c0-8.8-7.2-16-16-16zm-192-32V64c0-53 43-96 96-96s96 43 96 96v64h80c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48zm16 160h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanBagShoppingMinus;
