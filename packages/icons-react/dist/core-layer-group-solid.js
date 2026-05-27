import React from 'react';

export const CoreLayerGroupSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m555.4 414.3-28.6 14.3-209.7 104.8c-18 9-39.2 9-57.2 0L50.2 428.6l-28.6-14.3 28.6-57.2 28.6 14.3 209.7 104.8L526.8 357l28.6 57.2zm0-128L317.1 405.5c-18 9-39.2 9-57.2 0L21.6 286.3l28.6-57.2 238.3 119.2 238.3-119.2zM259.8-21.5c18-9 39.2-9 57.2 0L544.4 92.2v71.6L317 277.5c-18 9-39.2 9-57.2 0L32.5 163.8V92.2z"})
);

export default CoreLayerGroupSolid;
