import React from 'react';

export interface LanGuitarElectricThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarElectricThin: React.FC<LanGuitarElectricThinProps>;
export default LanGuitarElectricThin;
