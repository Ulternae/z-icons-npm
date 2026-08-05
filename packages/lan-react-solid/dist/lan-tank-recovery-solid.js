import React from 'react';

export function LanTankRecoverySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 448 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 368c0 41.8-26.7 77.2-64 90.4V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-21.6c-37.3-13.2-64-48.6-64-90.4v-16h384zM288-16c35.3 0 64 28.7 64 64v69.6c37.3 13.2 64 48.7 64 90.4v48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-48c0-41.8 26.7-77.2 64-90.4V48c0-35.3 28.7-64 64-64zM184 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v32h48V80h16c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanTankRecoverySolid;
