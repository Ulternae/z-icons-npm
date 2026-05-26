import React from 'react';

export interface LanPantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsSolid: React.FC<LanPantsSolidProps>;
export default LanPantsSolid;
