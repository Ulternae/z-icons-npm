import React from 'react';

export interface LanPersonShelterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonShelter: React.FC<LanPersonShelterProps>;
export default LanPersonShelter;
