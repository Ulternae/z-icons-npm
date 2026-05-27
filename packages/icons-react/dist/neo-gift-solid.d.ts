import React from 'react';

export interface NeoGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGiftSolid: React.FC<NeoGiftSolidProps>;
export default NeoGiftSolid;
