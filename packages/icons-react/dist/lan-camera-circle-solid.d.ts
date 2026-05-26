import React from 'react';

export interface LanCameraCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleSolid: React.FC<LanCameraCircleSolidProps>;
export default LanCameraCircleSolid;
