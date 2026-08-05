import React from 'react';

export interface MinaLetterXDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXDiamond(props: MinaLetterXDiamondProps): React.ReactElement;
export default MinaLetterXDiamond;
