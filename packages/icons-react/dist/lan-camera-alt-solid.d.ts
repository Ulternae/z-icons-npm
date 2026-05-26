import React from 'react';

export interface LanCameraAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraAltSolid: React.FC<LanCameraAltSolidProps>;
export default LanCameraAltSolid;
