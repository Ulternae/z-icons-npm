import React from 'react';

export interface MinaLetterRDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRDiamond(props: MinaLetterRDiamondProps): React.ReactElement;
export default MinaLetterRDiamond;
