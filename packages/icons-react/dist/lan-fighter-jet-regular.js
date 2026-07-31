import React from 'react';

export const LanFighterJetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M184 0h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-38.9c4.7 6.1 9.8 12.6 15.1 19.6C297.5 100.4 329 141.7 354 176h76.4c20.1 0 39.9 4 58.5 11.7l57.6 24c17.9 7.5 29.5 24.9 29.5 44.3s-11.7 36.9-29.5 44.3l-57.6 24c-18.6 7.7-38.4 11.7-58.5 11.7H354l-97.5 128H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V336h-14.1l-41 41c-4.5 4.5-10.6 7-17 7h-64c-13.3 0-24-10.7-24-24L0 152c0-13.3 10.7-24 24-24h64c6.4 0 12.5 2.5 17 7l41 41h14.1V48h-8c-13.3 0-24-10.7-24-24S138.7 0 152 0zm24 176h86.4c-19.9-26.7-41.6-55.1-60.1-79.1-9.9-12.9-18.9-24.5-26.2-33.9v113zM48 280v56h30.1l41-41c4.5-4.5 10.6-7 17-7h294.4c13.7 0 27.3-2.7 40-8l57.6-24-57.6-24c-12.7-5.3-26.3-8-40-8H136c-6.4 0-12.5-2.5-17-7l-41-41H47.9v56h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24zm160 56v112.4L293.6 336z"})
);

export default LanFighterJetRegular;
