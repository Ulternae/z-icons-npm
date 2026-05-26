import React from 'react';

export interface LanFlowerTulipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerTulipSolid: React.FC<LanFlowerTulipSolidProps>;
export default LanFlowerTulipSolid;
