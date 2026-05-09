import React from 'react';

export const MinaServers = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 5.7c0-.663.448-1.2 1-1.2h16c.552 0 1 .537 1 1.2v3.6c0 .663-.448 1.2-1 1.2H4c-.552 0-1-.537-1-1.2zm3 1.8h2m-2 9h2m-5-1.8c0-.663.448-1.2 1-1.2h16c.552 0 1 .537 1 1.2v3.6c0 .663-.448 1.2-1 1.2H4c-.552 0-1-.537-1-1.2z"})
);

export default MinaServers;
