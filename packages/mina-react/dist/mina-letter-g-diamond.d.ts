import React from 'react';

export interface MinaLetterGDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGDiamond(props: MinaLetterGDiamondProps): React.ReactElement;
export default MinaLetterGDiamond;
