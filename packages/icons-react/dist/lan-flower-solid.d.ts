import React from 'react';

export interface LanFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerSolid: React.FC<LanFlowerSolidProps>;
export default LanFlowerSolid;
