import React from 'react';

export interface LanGuitarElectricProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarElectric: React.FC<LanGuitarElectricProps>;
export default LanGuitarElectric;
