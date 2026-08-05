import React from 'react';

export interface MinaLetterTDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTDiamond(props: MinaLetterTDiamondProps): React.ReactElement;
export default MinaLetterTDiamond;
