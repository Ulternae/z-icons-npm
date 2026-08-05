import React from 'react';

export interface MinaLetterDDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDDiamond(props: MinaLetterDDiamondProps): React.ReactElement;
export default MinaLetterDDiamond;
