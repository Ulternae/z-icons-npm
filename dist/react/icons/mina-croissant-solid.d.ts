import React from 'react';

export interface MinaCroissantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCroissantSolid: React.FC<MinaCroissantSolidProps>;
export default MinaCroissantSolid;
