import React from 'react';

export const LanTrainSubwayTunnelSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0C114.6 0 0 114.6 0 256v192c0 35.3 28.7 64 64 64h30.1l66-66c-27.6-7.1-48.1-32.2-48.1-62V192c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v192c0 29.8-20.4 54.9-48.1 62l66 66H448c35.3 0 64-28.7 64-64V256C512 114.6 397.4 0 256 0m94.1 512-64-64H226l-64 64zM280 320h48c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-48zm-48-128h-48c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h48zm-48 208a24 24 0 1 0 0-48 24 24 0 1 0 0 48m168-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTrainSubwayTunnelSolid;
