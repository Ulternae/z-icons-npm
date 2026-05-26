import React from 'react';

export const LanStarSharpHalfAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M233.1 16.7C236.3 6.8 245.6 0 256 0s19.7 6.8 22.9 16.7l5.2 16.2 1.3 4 .1.3L329.7 176h158.5c10.3 0 19.4 6.5 22.7 16.2s.1 20.4-8 26.7l-14.7 11.5-2 1.5-.1.1-114 88.7 44.4 139.5.1.4c.4 1.1 2.5 7.8 6.4 20.2 3.2 10-.5 21-9.1 27s-20.2 5.7-28.5-.7c-10.2-8-15.8-12.3-16.7-13l-.3-.3-112.2-87.3L126.9 507c-8.3 6.5-19.8 6.8-28.5.7s-12.3-16.9-9.1-27l50.8-160L9.3 218.9c-8.1-6.3-11.3-17-8-26.7S13.7 176 24 176h158.5l50.7-159.3zM256 350.4c12.1 0 24.3 3.9 34.4 11.8l47.9 37.2-19.7-61.8c-7.1-22.4.5-46.8 19-61.2l57.2-44.5h-65.2c-24.4 0-46-15.8-53.4-39L256 129.5z"})
);

export default LanStarSharpHalfAltSolid;
