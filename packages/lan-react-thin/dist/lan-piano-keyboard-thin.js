import React from 'react';

export function LanPianoKeyboardThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 224v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72zm-32 111.2V432H296v-96.8c18.3-3.7 32-19.8 32-39.2v-72h56v72c0 19.4 13.7 35.5 32 39.2m16 96.8v-96.8c18.3-3.7 32-19.8 32-39.2v-72h96v160c0 26.5-21.5 48-48 48zm-152 0H160v-96.8c18.3-3.7 32-19.8 32-39.2v-72h56v72c0 19.4 13.7 35.5 32 39.2zm-136 0H64c-26.5 0-48-21.5-48-48V224h96v72c0 19.4 13.7 35.5 32 39.2zm8-112c-13.3 0-24-10.7-24-24v-72h48v72c0 13.3-10.7 24-24 24m136 0c-13.3 0-24-10.7-24-24v-72h48v72c0 13.3-10.7 24-24 24m168-112H16v-80c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48v80zm120 0v-80c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64z"})
  );
}

export default LanPianoKeyboardThin;
