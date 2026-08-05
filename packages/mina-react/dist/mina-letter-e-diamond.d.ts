import React from 'react';

export interface MinaLetterEDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEDiamond(props: MinaLetterEDiamondProps): React.ReactElement;
export default MinaLetterEDiamond;
