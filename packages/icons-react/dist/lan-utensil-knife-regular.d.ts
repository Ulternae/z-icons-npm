import React from 'react';

export interface LanUtensilKnifeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilKnifeRegular: React.FC<LanUtensilKnifeRegularProps>;
export default LanUtensilKnifeRegular;
