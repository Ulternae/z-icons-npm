import React from 'react';

export interface LanCableCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCableCar: React.FC<LanCableCarProps>;
export default LanCableCar;
