import React from 'react';

export const LanCommentAltExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 32c53 0 96 43 96 96v224c0 53-43 96-96 96H296c-5.2 0-10.3 1.7-14.4 4.8l-115.2 86.4c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24v-72H96c-53 0-96-43-96-96V128c0-53 43-96 96-96zM256 304a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"})
);

export default LanCommentAltExclamationSolid;
