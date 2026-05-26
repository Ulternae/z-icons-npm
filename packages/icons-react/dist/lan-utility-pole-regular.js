import React from 'react';

export const LanUtilityPoleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v56H128V56c0-13.3-10.7-24-24-24S80 42.7 80 56v24H48V56c0-13.3-10.7-24-24-24S0 42.7 0 56v48c0 13.3 10.7 24 24 24h31.6L232 267.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V267.6L456.3 128H488c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280zm99 104-99 78.4V128zm-147 78.4L133 128h99z"})
);

export default LanUtilityPoleRegular;
