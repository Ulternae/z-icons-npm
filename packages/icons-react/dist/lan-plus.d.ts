import React from 'react';

export interface LanPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlus: React.FC<LanPlusProps>;
export default LanPlus;
