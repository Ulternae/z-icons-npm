import React from 'react';

export interface LanCameraViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraViewfinderSolid: React.FC<LanCameraViewfinderSolidProps>;
export default LanCameraViewfinderSolid;
