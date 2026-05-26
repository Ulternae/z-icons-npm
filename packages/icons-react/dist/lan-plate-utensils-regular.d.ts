import React from 'react';

export interface LanPlateUtensilsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateUtensilsRegular: React.FC<LanPlateUtensilsRegularProps>;
export default LanPlateUtensilsRegular;
