import React from 'react';

export interface LanMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoon: React.FC<LanMoonProps>;
export default LanMoon;
