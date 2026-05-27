import React from 'react';

export interface NeoGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGift: React.FC<NeoGiftProps>;
export default NeoGift;
