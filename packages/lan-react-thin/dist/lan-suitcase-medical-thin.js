import React from 'react';

export function LanSuitcaseMedicalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 40v56h160V40c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24m-16 56V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v56h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm184 16H112v352h288V112zm72 0v352h32c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48zM96 464V112H64c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48zm144-256c-4.4 0-8 3.6-8 8v40c0 2.1-.8 4.2-2.3 5.7s-3.5 2.3-5.7 2.3h-40c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8zm-24 8c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32z"})
  );
}

export default LanSuitcaseMedicalThin;
