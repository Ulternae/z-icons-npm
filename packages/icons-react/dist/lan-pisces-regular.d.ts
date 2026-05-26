import React from 'react';

export interface LanPiscesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiscesRegular: React.FC<LanPiscesRegularProps>;
export default LanPiscesRegular;
