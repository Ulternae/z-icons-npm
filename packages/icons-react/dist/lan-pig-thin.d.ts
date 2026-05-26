import React from 'react';

export interface LanPigThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPigThin: React.FC<LanPigThinProps>;
export default LanPigThin;
