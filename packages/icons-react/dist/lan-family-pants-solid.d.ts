import React from 'react';

export interface LanFamilyPantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyPantsSolid: React.FC<LanFamilyPantsSolidProps>;
export default LanFamilyPantsSolid;
