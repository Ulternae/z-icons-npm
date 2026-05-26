import React from 'react';

export interface LanPoundSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoundSign: React.FC<LanPoundSignProps>;
export default LanPoundSign;
