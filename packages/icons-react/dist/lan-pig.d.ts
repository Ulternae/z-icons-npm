import React from 'react';

export interface LanPigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPig: React.FC<LanPigProps>;
export default LanPig;
