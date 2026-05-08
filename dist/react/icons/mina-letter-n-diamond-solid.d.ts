import React from 'react';

export interface MinaLetterNDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNDiamondSolid: React.FC<MinaLetterNDiamondSolidProps>;
export default MinaLetterNDiamondSolid;
