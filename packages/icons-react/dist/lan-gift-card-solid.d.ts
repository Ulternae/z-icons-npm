import React from 'react';

export interface LanGiftCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftCardSolid: React.FC<LanGiftCardSolidProps>;
export default LanGiftCardSolid;
