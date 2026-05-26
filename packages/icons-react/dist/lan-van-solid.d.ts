import React from 'react';

export interface LanVanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVanSolid: React.FC<LanVanSolidProps>;
export default LanVanSolid;
