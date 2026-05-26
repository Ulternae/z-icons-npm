import React from 'react';

export interface LanCameraRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRotateSolid: React.FC<LanCameraRotateSolidProps>;
export default LanCameraRotateSolid;
