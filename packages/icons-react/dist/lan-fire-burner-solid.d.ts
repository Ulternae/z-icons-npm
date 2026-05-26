import React from 'react';

export interface LanFireBurnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireBurnerSolid: React.FC<LanFireBurnerSolidProps>;
export default LanFireBurnerSolid;
