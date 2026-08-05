import React from 'react';

export function LanBuildingColumns({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M1.3 185c4 13.6 16.5 23 30.7 23h32v192H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V208h32c14.2 0 26.7-9.4 30.7-23s-1.5-28.3-13.4-35.9l-224-144c-10.5-6.8-24.1-6.8-34.6 0l-224 144C2.8 156.8-2.7 171.4 1.3 185M96 400V208h80v192zm112 0V208h96v192zm98.6-224c3.5-7.3 5.4-15.4 5.4-24 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 8.6 1.9 16.7 5.4 24H32L256 32l224 144zM256 128a24 24 0 1 1 0 48 24 24 0 1 1 0-48m80 272V208h80v192zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanBuildingColumns;
