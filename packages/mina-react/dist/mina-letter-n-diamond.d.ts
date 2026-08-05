import React from 'react';

export interface MinaLetterNDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNDiamond(props: MinaLetterNDiamondProps): React.ReactElement;
export default MinaLetterNDiamond;
