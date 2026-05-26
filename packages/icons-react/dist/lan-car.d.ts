import React from 'react';

export interface LanCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCar: React.FC<LanCarProps>;
export default LanCar;
