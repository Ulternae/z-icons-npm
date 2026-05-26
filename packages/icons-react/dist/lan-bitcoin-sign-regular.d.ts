import React from 'react';

export interface LanBitcoinSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBitcoinSignRegular: React.FC<LanBitcoinSignRegularProps>;
export default LanBitcoinSignRegular;
