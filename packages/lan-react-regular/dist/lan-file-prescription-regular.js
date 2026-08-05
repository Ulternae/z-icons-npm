import React from 'react';

export function LanFilePrescriptionRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm40 224c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h24.5l34.2 29.3-18.7 16.8c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l23.4-21 25 21.4c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8l-20.2-17.3 20.7-18.6c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8L222.8 349 205 333.7c11.8-11.6 19.2-27.8 19.2-45.7 0-35.3-28.7-64-64-64h-56zm63.8 78-.2-.2-.5.5c-2.2 1.1-4.6 1.7-7.2 1.7h-32v-32h32c8.8 0 16 7.2 16 16 0 6-3.3 11.2-8.2 14z"})
  );
}

export default LanFilePrescriptionRegular;
