import React from 'react';

export interface MinaLetterMDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMDiamond(props: MinaLetterMDiamondProps): React.ReactElement;
export default MinaLetterMDiamond;
