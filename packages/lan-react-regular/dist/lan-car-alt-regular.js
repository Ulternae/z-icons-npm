import React from 'react';

export function LanCarAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M163.9 80h184.2c20.7 0 39 13.2 45.5 32.8L420 192H92l26.4-79.2c6.5-19.6 24.8-32.8 45.5-32.8M72.8 97.6l-33 99.1C16.4 206.3 0 229.2 0 256v96c0 23.7 12.9 44.4 32 55.4V456c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h352v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-48.6c19.1-11.1 32-31.7 32-55.4v-96c0-26.8-16.4-49.7-39.8-59.3l-33-99.1C426.1 58.4 389.4 32 348.1 32H163.9c-41.3 0-78 26.4-91.1 65.6M320 368v-32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16zM80 296c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m296-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanCarAltRegular;
