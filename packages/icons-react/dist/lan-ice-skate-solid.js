import React from 'react';

export const LanIceSkateSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c17.7 0 32 14.3 32 32v64h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v32h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56l91.6 27.5c40.6 12.2 68.4 49.6 68.4 92v24.6c0 26.5-21.5 48-48 48v48h72c13.3 0 24-10.7 24-24v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 39.8-32.2 72-72 72L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24h72v-48c-17.7 0-32-14.3-32-32V104.7c0-23.5 17-43.5 40.1-47.3L256 32c0-17.7 14.3-32 32-32M144 464h240v-48H144z"})
);

export default LanIceSkateSolid;
