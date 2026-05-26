import React from 'react';

export interface LanPentagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPentagonThin: React.FC<LanPentagonThinProps>;
export default LanPentagonThin;
