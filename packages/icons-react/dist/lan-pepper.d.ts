import React from 'react';

export interface LanPepperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepper: React.FC<LanPepperProps>;
export default LanPepper;
