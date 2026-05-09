import React from 'react';

export interface MinaLetterHDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHDiamondSolid: React.FC<MinaLetterHDiamondSolidProps>;
export default MinaLetterHDiamondSolid;
