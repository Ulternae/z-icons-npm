import React from 'react';

export interface MinaLetterLDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLDiamond(props: MinaLetterLDiamondProps): React.ReactElement;
export default MinaLetterLDiamond;
