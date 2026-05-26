import React from 'react';

export interface LanPersonShelterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonShelterThin: React.FC<LanPersonShelterThinProps>;
export default LanPersonShelterThin;
