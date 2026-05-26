import React from 'react';

export interface LanPlateUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateUtensils: React.FC<LanPlateUtensilsProps>;
export default LanPlateUtensils;
