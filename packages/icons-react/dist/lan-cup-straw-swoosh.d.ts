import React from 'react';

export interface LanCupStrawSwooshProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawSwoosh: React.FC<LanCupStrawSwooshProps>;
export default LanCupStrawSwoosh;
