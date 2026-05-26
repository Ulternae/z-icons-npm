import React from 'react';

export interface LanCameraWebSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebSolid: React.FC<LanCameraWebSolidProps>;
export default LanCameraWebSolid;
