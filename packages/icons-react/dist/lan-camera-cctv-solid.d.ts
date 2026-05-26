import React from 'react';

export interface LanCameraCctvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCctvSolid: React.FC<LanCameraCctvSolidProps>;
export default LanCameraCctvSolid;
