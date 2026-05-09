import React from 'react';

export interface MinaGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGift: React.FC<MinaGiftProps>;
export default MinaGift;
