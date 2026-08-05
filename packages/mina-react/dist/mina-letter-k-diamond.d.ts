import React from 'react';

export interface MinaLetterKDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKDiamond(props: MinaLetterKDiamondProps): React.ReactElement;
export default MinaLetterKDiamond;
