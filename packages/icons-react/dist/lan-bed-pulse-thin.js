import React from 'react';

export const LanBedPulseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M455.2 4.4 484.9 64H568c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88c-3 0-5.8-1.7-7.2-4.4l-24-48.1L391.4 171c-1.2 2.9-3.9 4.9-7.1 5s-6.1-1.6-7.5-4.4L331.1 80H264c-4.4 0-8-3.6-8-8s3.6-8 8-8h72c3 0 5.8 1.7 7.2 4.4l40 80.1L440.6 5c1.2-2.9 3.9-4.9 7.1-5s6.1 1.6 7.5 4.4M312 152h1.4l8 16H312c-13.3 0-24 10.7-24 24v176h272V256c0-48.6-39.4-88-88-88h-27.7l6.4-16H472c57.4 0 104 46.6 104 104v216c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v328h256V192c0-22.1 17.9-40 40-40m-104 88a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanBedPulseThin;
