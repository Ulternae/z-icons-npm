import React from 'react';

export interface MinaLetterUDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUDiamond(props: MinaLetterUDiamondProps): React.ReactElement;
export default MinaLetterUDiamond;
