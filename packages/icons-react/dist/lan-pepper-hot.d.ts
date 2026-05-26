import React from 'react';

export interface LanPepperHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperHot: React.FC<LanPepperHotProps>;
export default LanPepperHot;
