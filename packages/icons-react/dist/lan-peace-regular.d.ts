import React from 'react';

export interface LanPeaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeaceRegular: React.FC<LanPeaceRegularProps>;
export default LanPeaceRegular;
