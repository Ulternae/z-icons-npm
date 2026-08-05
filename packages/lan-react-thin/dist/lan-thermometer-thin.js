import React from 'react';

export function LanThermometerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M355.1 40.2C370.6 24.7 391.6 16 413.4 16c45.6 0 82.5 36.9 82.5 82.5 0 21.9-8.7 42.9-24.2 58.3L240.4 388.3c-7.5 7.5-17.7 11.7-28.3 11.7H112V299.9c0-10.6 4.2-20.8 11.7-28.3l52.3-52.3 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 208l52.7-52.7 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L251.3 144 304 91.3l50.3 50.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L315.3 80zM96 299.9v104.8L2.3 498.4c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l93.7-93.7h104.8c14.9 0 29.1-5.9 39.6-16.4l231.4-231.4c18.5-18.5 28.9-43.5 28.9-69.7C512 44.1 467.9 0 413.5 0c-26.1 0-51.2 10.4-69.7 28.9L112.4 260.3A55.92 55.92 0 0 0 96 299.9"})
  );
}

export default LanThermometerThin;
