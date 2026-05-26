import React from 'react';

export interface LanUserAlienSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAlienSolid: React.FC<LanUserAlienSolidProps>;
export default LanUserAlienSolid;
