import React from 'react';

export interface LanUtensilKnifeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilKnifeThin: React.FC<LanUtensilKnifeThinProps>;
export default LanUtensilKnifeThin;
