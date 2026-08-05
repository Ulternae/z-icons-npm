import React from 'react';

export function LanPrescriptionBottleAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32zM0 80c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V125.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48zm48 48h288v320c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48zm120 104c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h40c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24z"})
  );
}

export default LanPrescriptionBottleAltThin;
