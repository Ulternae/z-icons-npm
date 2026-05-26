import React from 'react';

export interface LanPeanutsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanuts: React.FC<LanPeanutsProps>;
export default LanPeanuts;
