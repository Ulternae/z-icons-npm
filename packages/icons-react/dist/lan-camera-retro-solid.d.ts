import React from 'react';

export interface LanCameraRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRetroSolid: React.FC<LanCameraRetroSolidProps>;
export default LanCameraRetroSolid;
