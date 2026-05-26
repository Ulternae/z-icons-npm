import React from 'react';

export interface LanPlateUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateUtensilsSolid: React.FC<LanPlateUtensilsSolidProps>;
export default LanPlateUtensilsSolid;
