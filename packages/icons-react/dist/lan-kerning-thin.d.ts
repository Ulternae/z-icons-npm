import React from 'react';

export interface LanKerningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKerningThin: React.FC<LanKerningThinProps>;
export default LanKerningThin;
