import React from 'react';

export interface LanSealSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealSolid: React.FC<LanSealSolidProps>;
export default LanSealSolid;
