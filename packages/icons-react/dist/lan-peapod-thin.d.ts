import React from 'react';

export interface LanPeapodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeapodThin: React.FC<LanPeapodThinProps>;
export default LanPeapodThin;
