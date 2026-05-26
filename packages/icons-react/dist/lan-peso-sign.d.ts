import React from 'react';

export interface LanPesoSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesoSign: React.FC<LanPesoSignProps>;
export default LanPesoSign;
