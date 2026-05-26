import React from 'react';

export interface LanPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusRegular: React.FC<LanPlusRegularProps>;
export default LanPlusRegular;
