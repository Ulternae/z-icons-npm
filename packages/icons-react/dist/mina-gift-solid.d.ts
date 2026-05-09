import React from 'react';

export interface MinaGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGiftSolid: React.FC<MinaGiftSolidProps>;
export default MinaGiftSolid;
