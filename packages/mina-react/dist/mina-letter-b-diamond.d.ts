import React from 'react';

export interface MinaLetterBDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBDiamond(props: MinaLetterBDiamondProps): React.ReactElement;
export default MinaLetterBDiamond;
