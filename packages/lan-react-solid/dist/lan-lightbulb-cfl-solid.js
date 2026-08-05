import React from 'react';

export function LanLightbulbCflSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M167.8 63c17.1-4.3 27.6-21.7 23.3-38.8S169.4-3.3 152.2 1l-128 32C7.1 37.2-3.3 54.6 1 71.8S22.6 99.3 39.8 95zm151.3 25.2c-4.3-17.1-21.7-27.6-38.8-23.3l-256 64C7.1 133.2-3.3 150.6 1 167.8s21.6 27.5 38.8 23.2l256-64c17.1-4.3 27.6-21.7 23.3-38.8M295.8 223c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-256 64C7.1 229.2-3.3 246.6 1 263.8s21.6 27.5 38.8 23.2zM176 384h-32v-90l-48 12v78h-8c-13.3 0-24 10.7-24 24v24c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80v-24c0-13.3-10.7-24-24-24h-8v-47l71.8-17.9c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-80 20c-13.7 3.4-24.2 16.5-24.2 30.3V384z"})
  );
}

export default LanLightbulbCflSolid;
