import React from 'react';

export interface MinaLetterPDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPDiamondSolid: React.FC<MinaLetterPDiamondSolidProps>;
export default MinaLetterPDiamondSolid;
