import React from 'react';

export interface LanPepperHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperHotThin: React.FC<LanPepperHotThinProps>;
export default LanPepperHotThin;
