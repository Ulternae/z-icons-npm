import React from 'react';

export const LanStarfighterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M354.6 21 384 256v224H256V256l29.4-235c1.5-12 11.7-21 23.8-21h21.6c12.1 0 22.3 9 23.8 21M288 256v64h64v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32M48 72c13.3 0 24 10.7 24 24v24c13.3 0 24 10.7 24 24s-10.7 24-24 24v184h56v-40c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v168c0 17.7-14.3 32-32 32s-32-14.3-32-32v-12.8l-92.6-37C63 436.2 56 440 48 440c-13.3 0-24-10.7-24-24V168c-13.3 0-24-10.7-24-24s10.7-24 24-24V96c0-13.3 10.7-24 24-24m544 0c13.3 0 24 10.7 24 24v24c13.3 0 24 10.7 24 24s-10.7 24-24 24v280c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16l-88 35.2V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V312c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v40h56V168c-13.3 0-24-10.7-24-24s10.7-24 24-24V96c0-13.3 10.7-24 24-24"})
);

export default LanStarfighterSolid;
