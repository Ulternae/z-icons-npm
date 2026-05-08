import React from 'react';

export interface MinaLetterVDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVDiamond: React.FC<MinaLetterVDiamondProps>;
export default MinaLetterVDiamond;
