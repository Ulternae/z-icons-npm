import React from 'react';

export interface MinaLetterZDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZDiamond(props: MinaLetterZDiamondProps): React.ReactElement;
export default MinaLetterZDiamond;
