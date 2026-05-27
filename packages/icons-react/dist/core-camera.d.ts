import React from 'react';

export interface CoreCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCamera: React.FC<CoreCameraProps>;
export default CoreCamera;
