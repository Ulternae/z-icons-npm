import React from 'react';

export const LanDiceD20 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M228.2-10.2c17.6-8.5 38.1-8.5 55.7 0l3.7 2 192 108.8c18.8 10.7 30.8 30 32.3 51.4l.2 4.3v215.5c0 21.6-10.9 41.7-28.8 53.4l-3.7 2.2-192 108.8c-19.6 11.1-43.6 11.1-63.1 0L32.4 427.5C12.4 416.1 0 394.8 0 371.8V156.3l.2-4.3c1.4-21.4 13.5-40.7 32.3-51.4l192-108.8zM240 508.3V432L73.9 414.1zm32-76.4v76.3l166.1-94.1zM44.6 378.8l181.9 19.5-91.4-159.6-90.6 140.1zm240.8 19.5 181.9-19.5-90.6-140.1-91.4 159.6zM256 385.4 348.4 224H163.6zM32 156.2v183.2l82.2-127.3L32 154c0 .7-.1 1.4-.1 2.1zm365.8 55.9L480 339.3V156.2c0-.7-.1-1.4-.2-2.1l-82.1 58zM163.7 192h184.7L256 31.5zM49.8 127.5l81.1 57.3 88.2-153.2-169.2 95.9zm331.3 57.3 81.1-57.3L293 31.6z"})
);

export default LanDiceD20;
