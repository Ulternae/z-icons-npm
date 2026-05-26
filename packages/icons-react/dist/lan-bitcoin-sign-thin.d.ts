import React from 'react';

export interface LanBitcoinSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBitcoinSignThin: React.FC<LanBitcoinSignThinProps>;
export default LanBitcoinSignThin;
