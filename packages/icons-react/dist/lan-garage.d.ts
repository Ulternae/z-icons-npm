import React from 'react';

export interface LanGarageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarage: React.FC<LanGarageProps>;
export default LanGarage;
