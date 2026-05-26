import React from 'react';

export interface LanPenNibRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNibRegular: React.FC<LanPenNibRegularProps>;
export default LanPenNibRegular;
