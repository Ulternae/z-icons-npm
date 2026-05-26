import React from 'react';

export interface LanRaccoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaccoon: React.FC<LanRaccoonProps>;
export default LanRaccoon;
