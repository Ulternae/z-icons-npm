import React from 'react';

export interface MinaLetterADiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterADiamond(props: MinaLetterADiamondProps): React.ReactElement;
export default MinaLetterADiamond;
