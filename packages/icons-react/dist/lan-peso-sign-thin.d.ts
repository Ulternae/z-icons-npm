import React from 'react';

export interface LanPesoSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesoSignThin: React.FC<LanPesoSignThinProps>;
export default LanPesoSignThin;
