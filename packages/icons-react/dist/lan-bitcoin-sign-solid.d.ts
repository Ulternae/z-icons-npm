import React from 'react';

export interface LanBitcoinSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBitcoinSignSolid: React.FC<LanBitcoinSignSolidProps>;
export default LanBitcoinSignSolid;
