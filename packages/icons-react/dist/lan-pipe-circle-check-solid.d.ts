import React from 'react';

export interface LanPipeCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCircleCheckSolid: React.FC<LanPipeCircleCheckSolidProps>;
export default LanPipeCircleCheckSolid;
