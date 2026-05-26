import React from 'react';

export const LanWindCircleExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c118.3 0 215.2 91.8 223.4 208H408c-39.8 0-72 32.2-72 72s32.2 72 72 72h31.8c-40.5 58-107.7 96-183.8 96-123.7 0-224-100.3-224-224S132.3 32 256 32m264 256c48.6 0 88 39.4 88 88s-39.4 88-88 88h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c22.1 0 40-17.9 40-40s-17.9-40-40-40H408c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-264 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7zm296-80c48.6 0 88 39.4 88 88s-39.4 88-88 88h-25.8c-1.9-16.5-5.3-32.5-10.1-48H552c22.1 0 40-17.9 40-40s-17.9-40-40-40h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanWindCircleExclamationSolid;
