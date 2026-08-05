import React from 'react';

export interface MinaLetterJDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJDiamond(props: MinaLetterJDiamondProps): React.ReactElement;
export default MinaLetterJDiamond;
