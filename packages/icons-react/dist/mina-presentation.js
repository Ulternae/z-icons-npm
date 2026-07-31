import React from 'react';

export const MinaPresentation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M3 4h18m-1.9 0v9.778c0 .471-.19.923-.527 1.257-.338.333-.796.52-1.273.52H6.7c-.477 0-.935-.187-1.273-.52a1.77 1.77 0 0 1-.527-1.257V4m2.6 16 4.5-4.444L16.5 20"})
);

export default MinaPresentation;
