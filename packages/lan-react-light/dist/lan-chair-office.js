import React from 'react';

export function LanChairOffice({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 32c-17.7 0-32 14.3-32 32v192h192V64c0-17.7-14.3-32-32-32zm192 32v192h16c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H240v80h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-80H80c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h16V64c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64M224 368h144c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16zM48 144v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16m384 0v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanChairOffice;
