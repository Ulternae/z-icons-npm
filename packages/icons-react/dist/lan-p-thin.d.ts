import React from 'react';

export interface LanPThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPThin: React.FC<LanPThinProps>;
export default LanPThin;
