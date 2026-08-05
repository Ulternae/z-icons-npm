import React from 'react';

export function LanSeats({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-17.7 0-32 14.3-32 32v192h176V64c0-17.7-14.3-32-32-32zm352 224V64c0-17.7-14.3-32-32-32H304c-17.7 0-32 14.3-32 32v192zm32 0v2.7c18.6 6.6 32 24.4 32 45.3v48c0 20.9-13.4 38.7-32 45.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96H272v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96H64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-98.7C13.4 390.7 0 372.9 0 352v-48c0-20.9 13.4-38.7 32-45.3V64C32 28.7 60.7 0 96 0h112c19.1 0 36.3 8.4 48 21.7C267.7 8.4 284.9 0 304 0h112c35.3 0 64 28.7 64 64zM48 368h416c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16"})
  );
}

export default LanSeats;
