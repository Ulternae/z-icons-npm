import React from 'react';

export const CoreIdCardRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64h448v384H390.3c-16.6-28.7-40.4-52.7-69-69.5S259.5 352 224 352c-66.8 0-125.6 34.1-160 85.8zm64 160a96 96 0 1 0 192 0 96 96 0 1 0-192 0m256-60v56h96v-56zm0 96v56h96v-56z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M512 64v384H390.3c-33.2-57.4-95.2-96-166.3-96-66.8 0-125.6 34.1-160 85.8V64zM320.3 448H127.6c24.6-24.7 58.7-40 96.3-40s71.7 15.3 96.3 40zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 184a40 40 0 1 1 0 80 40 40 0 1 1 0-80m0 136a96 96 0 1 0 0-192 96 96 0 1 0 0 192m256-100v-56h-96v56zm-96 96h96v-56h-96z"})
);

export default CoreIdCardRegularDuo;
