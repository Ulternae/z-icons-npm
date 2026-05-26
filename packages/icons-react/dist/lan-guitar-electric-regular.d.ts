import React from 'react';

export interface LanGuitarElectricRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarElectricRegular: React.FC<LanGuitarElectricRegularProps>;
export default LanGuitarElectricRegular;
