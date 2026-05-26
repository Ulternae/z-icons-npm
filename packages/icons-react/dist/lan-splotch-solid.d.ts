import React from 'react';

export interface LanSplotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplotchSolid: React.FC<LanSplotchSolidProps>;
export default LanSplotchSolid;
