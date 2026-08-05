import React from 'react';

export interface MinaLetterPDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPDiamond(props: MinaLetterPDiamondProps): React.ReactElement;
export default MinaLetterPDiamond;
