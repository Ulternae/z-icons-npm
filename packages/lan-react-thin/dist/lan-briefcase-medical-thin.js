import React from 'react';

export function LanBriefcaseMedicalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M200 16h112c13.3 0 24 10.7 24 24v56H176V40c0-13.3 10.7-24 24-24m-40 24v56H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-96V40c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40m8 72h280c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zm64 104c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h40c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24z"})
  );
}

export default LanBriefcaseMedicalThin;
