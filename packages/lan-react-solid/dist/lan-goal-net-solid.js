import React from 'react';

export function LanGoalNetSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 32c53 0 96 43 96 96v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v320c0 17.7-14.3 32-32 32S0 465.7 0 448V128c0-53 43-96 96-96zm-72 96c13.3 0 24 10.7 24 24v24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-72v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-72v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-48h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-48h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-24l.1-2.5c1.2-12.1 11.5-21.5 23.9-21.5s22.6 9.4 23.9 21.5l.1 2.5v24h72v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h72v-24c0-13.3 10.7-24 24-24M192 368h72v-48h-72zm120 0h72v-48h-72zm-120-96h72v-48h-72zm120 0h72v-48h-72z"})
  );
}

export default LanGoalNetSolid;
