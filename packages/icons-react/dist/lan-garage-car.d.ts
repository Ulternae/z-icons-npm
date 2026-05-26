import React from 'react';

export interface LanGarageCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageCar: React.FC<LanGarageCarProps>;
export default LanGarageCar;
