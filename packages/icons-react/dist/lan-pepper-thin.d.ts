import React from 'react';

export interface LanPepperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperThin: React.FC<LanPepperThinProps>;
export default LanPepperThin;
