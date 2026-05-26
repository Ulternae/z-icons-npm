import React from 'react';

export interface LanKerningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKerning: React.FC<LanKerningProps>;
export default LanKerning;
