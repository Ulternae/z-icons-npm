import React from 'react';

export interface MinaLetterHDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHDiamond(props: MinaLetterHDiamondProps): React.ReactElement;
export default MinaLetterHDiamond;
