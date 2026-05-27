import React from 'react';

export interface CoreDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDiamondSolid: React.FC<CoreDiamondSolidProps>;
export default CoreDiamondSolid;
