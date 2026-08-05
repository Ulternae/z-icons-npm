import React from 'react';

export function LanPollPeopleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96M0 458.7C0 470.4 9.6 480 21.3 480h117.3c11.8 0 21.3-9.6 21.3-21.3 0-23.6-19.1-42.7-42.7-42.7H42.5C19.1 416 0 435.1 0 458.7M42.7 160C19.1 160 0 179.1 0 202.7 0 214.4 9.6 224 21.3 224h117.3c11.8 0 21.3-9.6 21.3-21.3 0-23.6-19.1-42.7-42.7-42.7H42.5zM320 336v64h-48v-64zm48 0h96v64h-96zm-96-48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm0-176h80v64h-80zm128 0h64v64h-64zm-176 0v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H272c-26.5 0-48 21.5-48 48"})
  );
}

export default LanPollPeopleRegular;
