import React from 'react';

export const LanChartCandlestickRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v344c0 44.2 35.8 80 80 80h408c13.3 0 24-10.7 24-24s-10.7-24-24-24H80c-17.7 0-32-14.3-32-32zm272-24c-13.3 0-24 10.7-24 24v41c-13.8 3.6-24 16.1-24 31v96c0 14.9 10.2 27.4 24 31v41c0 13.3 10.7 24 24 24s24-10.7 24-24v-41c13.8-3.6 24-16.1 24-31v-96c0-14.9-10.2-27.4-24-31V56c0-13.3-10.7-24-24-24M176 64c-13.3 0-24 10.7-24 24v33c-13.8 3.6-24 16.1-24 31v128c0 14.9 10.2 27.4 24 31v33c0 13.3 10.7 24 24 24s24-10.7 24-24v-33c13.8-3.6 24-16.1 24-31V152c0-14.9-10.2-27.4-24-31V88c0-13.3-10.7-24-24-24m288 64c-13.3 0-24 10.7-24 24v33c-13.8 3.6-24 16.1-24 31v64c0 14.9 10.2 27.4 24 31v33c0 13.3 10.7 24 24 24s24-10.7 24-24v-33c13.8-3.6 24-16.1 24-31v-64c0-14.9-10.2-27.4-24-31v-33c0-13.3-10.7-24-24-24"})
);

export default LanChartCandlestickRegular;
