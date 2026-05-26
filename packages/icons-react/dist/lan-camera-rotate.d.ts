import React from 'react';

export interface LanCameraRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRotate: React.FC<LanCameraRotateProps>;
export default LanCameraRotate;
