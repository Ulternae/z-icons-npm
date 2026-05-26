import React from 'react';

export interface LanCameraHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraHomeSolid: React.FC<LanCameraHomeSolidProps>;
export default LanCameraHomeSolid;
