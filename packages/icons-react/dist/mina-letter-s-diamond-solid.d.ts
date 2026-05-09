import React from 'react';

export interface MinaLetterSDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSDiamondSolid: React.FC<MinaLetterSDiamondSolidProps>;
export default MinaLetterSDiamondSolid;
