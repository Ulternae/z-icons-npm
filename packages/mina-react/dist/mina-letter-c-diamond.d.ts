import React from 'react';

export interface MinaLetterCDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCDiamond(props: MinaLetterCDiamondProps): React.ReactElement;
export default MinaLetterCDiamond;
