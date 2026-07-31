import React from 'react';

export const MinaTypeText = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12.53 20 7.764 4 3 20m1.596-5.03h6.337m4.244-3.03C16.765 10.933 21 9.925 21 13.451V20m0-5.541c-1.588.504-6.353.504-6.353 3.526 0 3.023 4.765 2.015 6.353-.504"})
);

export default MinaTypeText;
