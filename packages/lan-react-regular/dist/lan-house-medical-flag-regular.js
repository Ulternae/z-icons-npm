import React from 'react';

export function LanHouseMedicalFlagRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 24v8h112c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H496v296c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M256.6 54.7l143.4 138v66.6L240 105.2 96 243.9v204c0 8.8 7.2 16 16 16h288v48H112c-35.3 0-64-28.7-64-64V290.1l-7.4 7.1c-9.5 9.2-24.7 8.9-33.9-.6s-8.9-24.7.6-33.9l216-208c9.3-8.9 24-8.9 33.3 0m-47.4 194.9c0-9.7 7.9-17.6 17.6-17.6h26.4c9.7 0 17.6 7.9 17.6 17.6v39.6h39.6c9.7 0 17.6 7.9 17.6 17.6v26.4c0 9.7-7.9 17.6-17.6 17.6h-39.6v39.6c0 9.7-7.9 17.6-17.6 17.6h-26.4c-9.7 0-17.6-7.9-17.6-17.6v-39.6h-39.6c-9.7 0-17.6-7.9-17.6-17.6v-26.4c0-9.7 7.9-17.6 17.6-17.6h39.6z"})
  );
}

export default LanHouseMedicalFlagRegular;
