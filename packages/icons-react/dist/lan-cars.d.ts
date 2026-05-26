import React from 'react';

export interface LanCarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCars: React.FC<LanCarsProps>;
export default LanCars;
