import React from 'react';

export interface LanUtensilKnifeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilKnifeSolid: React.FC<LanUtensilKnifeSolidProps>;
export default LanUtensilKnifeSolid;
