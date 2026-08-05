import React from 'react';

export interface MinaLetterFDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFDiamond(props: MinaLetterFDiamondProps): React.ReactElement;
export default MinaLetterFDiamond;
