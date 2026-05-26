import React from 'react';

export interface LanPenFancyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancy: React.FC<LanPenFancyProps>;
export default LanPenFancy;
