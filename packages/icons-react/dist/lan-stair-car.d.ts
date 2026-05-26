import React from 'react';

export interface LanStairCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairCar: React.FC<LanStairCarProps>;
export default LanStairCar;
