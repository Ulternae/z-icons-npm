import React from 'react';

export const LanTrainTrack = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M167.9 32.5c8.6 2.1 13.8 10.8 11.6 19.4l-15 60.1h183l-15-60.1c-2.1-8.6 3.1-17.3 11.6-19.4s17.3 3.1 19.4 11.6l17 67.9H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-43.5l24 96H464c8.8 0 16 7.2 16 16s-7.2 16-16 16h-43.5l24 96H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-43.5l15 60.1c2.1 8.6-3.1 17.3-11.6 19.4s-17.3-3.1-19.4-11.6l-17-67.9h-327l-17 67.9c-2.1 8.6-10.8 13.8-19.4 11.6s-13.8-10.8-11.6-19.4l15-60.1H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h51.5l24-96H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h51.5l24-96H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h51.5l17-67.9c2.1-8.6 10.8-13.8 19.4-11.6M156.5 144l-24 96h247l-24-96zm231 128h-263l-24 96h311z"})
);

export default LanTrainTrack;
