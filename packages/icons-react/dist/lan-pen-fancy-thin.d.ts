import React from 'react';

export interface LanPenFancyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancyThin: React.FC<LanPenFancyThinProps>;
export default LanPenFancyThin;
