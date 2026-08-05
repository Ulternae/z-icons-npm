import React from 'react';

export interface MinaLetterIDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIDiamond(props: MinaLetterIDiamondProps): React.ReactElement;
export default MinaLetterIDiamond;
