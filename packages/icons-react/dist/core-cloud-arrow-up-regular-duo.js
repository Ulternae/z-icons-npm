import React from 'react';

export const CoreCloudArrowUpRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 320c0 53 43 96 96 96h32v64h68V287.6l-68 68-39.6-39.6 19.8-19.8 96-96c10.9-10.9 28.7-10.9 39.6 0l96 96 19.8 19.8-39.6 39.6-68-68V480h68v-64h32c53 0 96-43 96-96 0-49.1-36.9-89.7-84.6-95.3l-25.4-3-2.6-25.5C393.5 139.9 345.9 96 288 96s-105.5 43.9-111.4 100.2l-2.6 25.5-25.4 3C100.9 230.3 64 270.9 64 320","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M288 32c82.7 0 151.9 57 170.8 133.8C526.4 184.5 576 246.4 576 320c0 88.4-71.6 160-160 160h-32v-64h32c53 0 96-43 96-96 0-49.1-36.9-89.7-84.6-95.3l-25.4-3-2.6-25.5C393.5 139.9 345.9 96 288 96s-105.5 43.9-111.4 100.2l-2.6 25.5-25.4 3c-47.6 5.6-84.5 46.2-84.5 95.3 0 53 43 96 96 96h32v64h-32C71.6 480 0 408.4 0 320c0-73.5 49.6-135.4 117.1-154.2C136 89 205.3 32 288 32m-19.8 168.2c10.9-10.9 28.7-10.9 39.6 0l96 96 19.8 19.8-39.6 39.6-68-68V480h-56V287.6l-68 68-39.6-39.6 19.8-19.8z"})
);

export default CoreCloudArrowUpRegularDuo;
