import React from 'react';

export interface MinaLetterMDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMDiamondSolid: React.FC<MinaLetterMDiamondSolidProps>;
export default MinaLetterMDiamondSolid;
