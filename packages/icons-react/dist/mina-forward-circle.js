import React from 'react';

export const MinaForwardCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement('path', {"d":"M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764.055-.945.082-1.417.383-1.642.3-.226.635-.022 1.306.385.174.106.342.214.49.318.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764.055-.945.082-1.417.383-1.642.3-.226.636-.022 1.306.385.174.106.341.214.49.318.169.118.353.261.538.412"})
);

export default MinaForwardCircle;
