import React from 'react';

export interface CoreGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGift: React.FC<CoreGiftProps>;
export default CoreGift;
