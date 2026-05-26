import React from 'react';

export interface LanCameraCircleEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleEllipsisSolid: React.FC<LanCameraCircleEllipsisSolidProps>;
export default LanCameraCircleEllipsisSolid;
