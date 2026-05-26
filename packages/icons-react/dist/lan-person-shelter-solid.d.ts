import React from 'react';

export interface LanPersonShelterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonShelterSolid: React.FC<LanPersonShelterSolidProps>;
export default LanPersonShelterSolid;
