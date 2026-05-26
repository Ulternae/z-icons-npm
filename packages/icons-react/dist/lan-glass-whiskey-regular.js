import React from 'react';

export const LanGlassWhiskeyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 104c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24v120H48zm0 168h352v72c0 48.6-39.4 88-88 88H136c-48.6 0-88-39.4-88-88zM72 32C32.2 32 0 64.2 0 104v240c0 75.1 60.9 136 136 136h176c75.1 0 136-60.9 136-136V104c0-39.8-32.2-72-72-72z"})
);

export default LanGlassWhiskeyRegular;
