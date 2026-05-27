import React from 'react';

export interface CoreGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGiftSolid: React.FC<CoreGiftSolidProps>;
export default CoreGiftSolid;
