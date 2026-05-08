import React from 'react';

export interface MinaLetterTDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTDiamondSolid: React.FC<MinaLetterTDiamondSolidProps>;
export default MinaLetterTDiamondSolid;
