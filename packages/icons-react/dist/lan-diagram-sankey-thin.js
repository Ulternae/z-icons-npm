import React from 'react';

export const LanDiagramSankeyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M353.1 80c-8 0-15.5 4-20 10.7l-77 115.5c-7.4 11.1-19.9 17.8-33.3 17.8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h214.9c8 0 15.5-4 20-10.7l77-115.5c7.4-11.1 19.9-17.8 33.2-17.8H536c4.4 0 8 3.6 8 8s-3.6 8-8 8zM176.4 304l92.3 118.7c4.5 5.8 11.5 9.3 18.9 9.3H536c4.4 0 8 3.6 8 8s-3.6 8-8 8H287.7c-12.3 0-24-5.7-31.6-15.4L156.1 304H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h528c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanDiagramSankeyThin;
