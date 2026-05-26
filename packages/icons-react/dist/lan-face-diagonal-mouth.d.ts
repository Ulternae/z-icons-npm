import React from 'react';

export interface LanFaceDiagonalMouthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDiagonalMouth: React.FC<LanFaceDiagonalMouthProps>;
export default LanFaceDiagonalMouth;
