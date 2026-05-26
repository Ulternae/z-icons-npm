import React from 'react';

export interface LanPRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPRegular: React.FC<LanPRegularProps>;
export default LanPRegular;
