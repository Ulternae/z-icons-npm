import React from 'react';

export const LanConveyorBeltArmRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 24c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v80h192c22.1 0 40 17.9 40 40v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24H224c-13.3 0-24-10.7-24-24V48h-80c-13.3 0-24-10.7-24-24m320 256c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 2.8-.5 5.5-1.4 8H544c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96s43-96 96-96h1.4c-.9-2.5-1.4-5.2-1.4-8v-32c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 2.8-.5 5.5-1.4 8h66.7c-.9-2.5-1.4-5.2-1.4-8v-32c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 2.8-.5 5.5-1.4 8h66.7c-.9-2.5-1.4-5.2-1.4-8v-32zM96 368c-26.5 0-48 21.5-48 48s21.5 48 48 48h448c26.5 0 48-21.5 48-48s-21.5-48-48-48zm32 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanConveyorBeltArmRegular;
