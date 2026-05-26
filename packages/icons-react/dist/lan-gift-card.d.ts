import React from 'react';

export interface LanGiftCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftCard: React.FC<LanGiftCardProps>;
export default LanGiftCard;
