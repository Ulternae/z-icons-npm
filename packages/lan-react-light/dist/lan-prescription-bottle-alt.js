import React from 'react';

export function LanPrescriptionBottleAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 32c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM0 96c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V141.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48zm64 352V144h256v304c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m112-240c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
  );
}

export default LanPrescriptionBottleAlt;
