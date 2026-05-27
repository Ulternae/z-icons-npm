import React from 'react';

export interface CoreDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDiamond: React.FC<CoreDiamondProps>;
export default CoreDiamond;
