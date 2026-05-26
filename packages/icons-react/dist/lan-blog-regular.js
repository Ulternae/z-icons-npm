import React from 'react';

export const LanBlogRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 24c0-13.3 10.7-24 24-24 145.8 0 264 118.2 264 264 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-119.3-96.7-216-216-216-13.3 0-24-10.7-24-24M56 96c13.3 0 24 10.7 24 24v248c0 53 43 96 96 96s96-43 96-96-43-96-96-96h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c79.5 0 144 64.5 144 144s-64.5 144-144 144S32 447.5 32 368V120c0-13.3 10.7-24 24-24m192 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanBlogRegular;
