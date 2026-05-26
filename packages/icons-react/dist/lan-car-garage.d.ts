import React from 'react';

export interface LanCarGarageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarGarage: React.FC<LanCarGarageProps>;
export default LanCarGarage;
