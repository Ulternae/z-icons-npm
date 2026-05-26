import React from 'react';

export interface LanUsdSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdSquareSolid: React.FC<LanUsdSquareSolidProps>;
export default LanUsdSquareSolid;
