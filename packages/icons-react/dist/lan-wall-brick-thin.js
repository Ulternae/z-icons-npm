import React from 'react';

export const LanWallBrickThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 48v80h192V48zm-16 80V48H64c-26.5 0-48 21.5-48 48v32zm-96 16v104h200V144zm0 224h96V264H16zm0 16v32c0 26.5 21.5 48 48 48h152v-80zm112-16h192V264H128zm208 0h96V264h-96zm96 16H232v80h152c26.5 0 48-21.5 48-48zm0-240H232v104h200zm0-16V96c0-26.5-21.5-48-48-48h-48v80zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanWallBrickThin;
