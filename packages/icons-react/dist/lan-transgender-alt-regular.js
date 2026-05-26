import React from 'react';

export const LanTransgenderAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136-32c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9L128 62.1 143 47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-15 15 22.2 22.2C212.1 94.4 248.4 80 288 80s75.9 14.4 103.8 38.2L494.1 16H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V49.9L423.3 154.6c15.6 24.7 24.7 54 24.7 85.4 0 80.2-59 146.6-136 158.2V432h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-33.8c-77-11.6-136-78-136-158.2 0-31.4 9-60.7 24.7-85.4L128 129.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l15-15L48 49.9V104c0 13.3-10.7 24-24 24S0 117.3 0 104V-8c0-13.3 10.7-24 24-24zm152 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224"})
);

export default LanTransgenderAltRegular;
