import React from 'react';

export interface LanPeaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeace: React.FC<LanPeaceProps>;
export default LanPeace;
