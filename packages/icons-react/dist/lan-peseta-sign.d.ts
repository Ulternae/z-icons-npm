import React from 'react';

export interface LanPesetaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesetaSign: React.FC<LanPesetaSignProps>;
export default LanPesetaSign;
