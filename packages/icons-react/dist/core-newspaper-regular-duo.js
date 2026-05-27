import React from 'react';

export const CoreNewspaperRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M186.4 416H480c17.7 0 32-14.3 32-32V96H192v288c0 11.2-2 22-5.6 32M256 164h192v56H256zm0 128h192v56H256z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M576 32v352c0 53-43 96-96 96H96c-53 0-96-43-96-96V96h64v288c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM192 96v288c0 11.2-2 22-5.6 32H480c17.7 0 32-14.3 32-32V96zm256 252H256v-56h192zm0-128H256v-56h192z"})
);

export default CoreNewspaperRegular-duo;
