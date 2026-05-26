import React from 'react';

export interface LanGiftCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftCardThin: React.FC<LanGiftCardThinProps>;
export default LanGiftCardThin;
