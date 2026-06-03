import React from 'react';

export const LanWineGlassAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0C52.9 0 43.2 7.6 40.7 18.4L4.4 170.9C1.5 183 0 195.5 0 208c0 80.2 59 146.6 136 158.2V496H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V366.2c77-11.6 136-78 136-158.2 0-12.5-1.5-24.9-4.4-37.1L279.3 18.4C276.8 7.6 267.1 0 256 0zM51 182 83 48h154l32 134c2 8.5 3 17.2 3 26 0 61.9-50.2 112-112 112S48 269.8 48 208c0-8.7 1-17.5 3-26"})
);

export default LanWineGlassAltRegular;
