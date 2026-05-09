import React from 'react';

export interface MinaLetterODiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterODiamondSolid: React.FC<MinaLetterODiamondSolidProps>;
export default MinaLetterODiamondSolid;
