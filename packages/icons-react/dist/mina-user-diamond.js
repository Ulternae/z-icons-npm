import React from 'react';

export const MinaUserDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"}), React.createElement('path', {"d":"M14.5 9.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16.809 18c-1.275-4.565-8.272-4.587-9.6-.063"})
);

export default MinaUserDiamond;
