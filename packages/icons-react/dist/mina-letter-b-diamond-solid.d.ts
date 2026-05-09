import React from 'react';

export interface MinaLetterBDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBDiamondSolid: React.FC<MinaLetterBDiamondSolidProps>;
export default MinaLetterBDiamondSolid;
