import React from 'react';

export interface LanAlienSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlienSolid: React.FC<LanAlienSolidProps>;
export default LanAlienSolid;
