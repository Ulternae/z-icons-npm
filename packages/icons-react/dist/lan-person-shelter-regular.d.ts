import React from 'react';

export interface LanPersonShelterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonShelterRegular: React.FC<LanPersonShelterRegularProps>;
export default LanPersonShelterRegular;
