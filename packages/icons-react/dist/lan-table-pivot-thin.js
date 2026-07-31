import React from 'react';

export const LanTablePivotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 527.925',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M200 32h248c35.3 0 64 28.7 64 64v112.6c-5.3-.8-10.7-.8-16 0V176H208v288h32.6c-.8 5.3-.8 10.7 0 16H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM80 160h112V48h-64c-26.5 0-48 21.5-48 48zm0 16v240c0 26.5 21.5 48 48 48h64V176zm416-16V96c0-26.5-21.5-48-48-48H208v112zm13.7 98.3 48 48c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L512 283.3V416c0 35.3-28.7 64-64 64H315.3l34.3 34.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3l48-48c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L315.3 464H448c26.5 0 48-21.5 48-48V283.3l-34.3 34.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l48-48c3.1-3.1 8.2-3.1 11.3 0"})
);

export default LanTablePivotThin;
