import React from 'react';

export interface MinaLetterODiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterODiamond(props: MinaLetterODiamondProps): React.ReactElement;
export default MinaLetterODiamond;
