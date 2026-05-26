import React from 'react';

export interface LanCupStrawSwooshRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawSwooshRegular: React.FC<LanCupStrawSwooshRegularProps>;
export default LanCupStrawSwooshRegular;
