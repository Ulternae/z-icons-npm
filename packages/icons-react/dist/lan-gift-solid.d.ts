import React from 'react';

export interface LanGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftSolid: React.FC<LanGiftSolidProps>;
export default LanGiftSolid;
