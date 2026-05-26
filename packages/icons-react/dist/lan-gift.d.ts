import React from 'react';

export interface LanGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGift: React.FC<LanGiftProps>;
export default LanGift;
