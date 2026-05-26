import React from 'react';

export interface LanPooThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooThin: React.FC<LanPooThinProps>;
export default LanPooThin;
