import React from 'react';

export interface LanPesoSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesoSignRegular: React.FC<LanPesoSignRegularProps>;
export default LanPesoSignRegular;
