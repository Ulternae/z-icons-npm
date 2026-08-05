import React from 'react';

export interface MinaLetterQDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQDiamond(props: MinaLetterQDiamondProps): React.ReactElement;
export default MinaLetterQDiamond;
