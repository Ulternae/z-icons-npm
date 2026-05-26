import React from 'react';

export interface LanPantiesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantiesSolid: React.FC<LanPantiesSolidProps>;
export default LanPantiesSolid;
