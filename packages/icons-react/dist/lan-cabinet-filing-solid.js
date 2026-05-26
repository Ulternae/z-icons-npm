import React from 'react';

export const LanCabinetFilingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64v160h384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64m0 208v176c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V272zm144-144v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8zM96 392c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8h-96v8c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanCabinetFilingSolid;
