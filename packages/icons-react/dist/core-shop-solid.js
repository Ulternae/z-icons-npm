import React from 'react';

export const CoreShopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 224H50.1C22.4 224 0 201.6 0 173.9c0-9.1 2.5-18 7.1-25.8L96 0h384l88.9 148.1c4.7 7.8 7.1 16.7 7.1 25.8 0 27.7-22.4 50.1-50.1 50.1H512v288h-64V224h-96v224c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64zm224 0H128v128h160z"})
);

export default CoreShopSolid;
