import React from 'react';

export interface LanPoundSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoundSignThin: React.FC<LanPoundSignThinProps>;
export default LanPoundSignThin;
