import React from 'react';

export interface MinaLetterSDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSDiamond: React.FC<MinaLetterSDiamondProps>;
export default MinaLetterSDiamond;
