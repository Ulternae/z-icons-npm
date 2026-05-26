import React from 'react';

export const LanClapperboard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 96H334.6l-96 96h114.7l96-96zm-49.4 96H480v-64c0-5.1-1.2-9.8-3.3-14.1zm113.4 0v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64zm-478.6 0 96-96H64c-17.7 0-32 14.3-32 32v64zM32 224v160c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V224zm46.6-32h114.7l96-96H174.6z"})
);

export default LanClapperboard;
