import React from 'react';

export interface LanPesetaSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesetaSignThin: React.FC<LanPesetaSignThinProps>;
export default LanPesetaSignThin;
