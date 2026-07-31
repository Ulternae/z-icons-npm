import React from 'react';

export const LanChestDrawersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 0c26.5 0 48 21.5 48 48v456c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H16v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V48C0 21.5 21.5 0 48 0zM16 288v176h416V288zm248 64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8zM16 272h192V160H16zm208 0h208V160H224zM48 16c-17.7 0-32 14.3-32 32v96h192V16zm176 128h208V48c0-17.7-14.3-32-32-32H224z"})
);

export default LanChestDrawersThin;
