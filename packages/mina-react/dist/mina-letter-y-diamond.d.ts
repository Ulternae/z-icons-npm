import React from 'react';

export interface MinaLetterYDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYDiamond(props: MinaLetterYDiamondProps): React.ReactElement;
export default MinaLetterYDiamond;
