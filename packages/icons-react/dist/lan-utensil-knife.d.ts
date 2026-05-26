import React from 'react';

export interface LanUtensilKnifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilKnife: React.FC<LanUtensilKnifeProps>;
export default LanUtensilKnife;
