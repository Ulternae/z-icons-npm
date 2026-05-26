import React from 'react';

export interface LanSnowBlowingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowBlowing: React.FC<LanSnowBlowingProps>;
export default LanSnowBlowing;
