import React from 'react';

export const LanArrowAltFromRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7 273c-9.4-9.4-9.4-24.6 0-33.9l144-144c6.9-6.9 17.2-8.9 26.2-5.2S192 102.3 192 112v80h144c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H192v80c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2zm249-49h-80c-8.8 0-16-7.2-16-16v-76.7L35.3 256 160 380.7V304c0-8.8 7.2-16 16-16h160c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM496 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16"})
);

export default LanArrowAltFromRight;
