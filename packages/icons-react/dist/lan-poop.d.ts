import React from 'react';

export interface LanPoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoop: React.FC<LanPoopProps>;
export default LanPoop;
