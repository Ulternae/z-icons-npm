import React from 'react';

export interface MinaLetterWDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWDiamond(props: MinaLetterWDiamondProps): React.ReactElement;
export default MinaLetterWDiamond;
