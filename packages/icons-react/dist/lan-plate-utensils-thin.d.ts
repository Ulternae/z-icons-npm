import React from 'react';

export interface LanPlateUtensilsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateUtensilsThin: React.FC<LanPlateUtensilsThinProps>;
export default LanPlateUtensilsThin;
