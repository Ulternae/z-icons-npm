import React from 'react';

export const LanPlaneTailSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M98.6 0h59.3c26.8 0 52.4 11.2 70.6 31l207.3 225H512v256h-51.4c-148.2 0-291.8-51.7-406.1-146.1C40.3 354.1 32 336.6 32 318.1c0-34.3 27.8-62.1 62.1-62.1h36L67.8 40.9C61.9 20.4 77.3 0 98.6 0M248 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanPlaneTailSolid;
