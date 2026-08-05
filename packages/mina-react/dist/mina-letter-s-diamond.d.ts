import React from 'react';

export interface MinaLetterSDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSDiamond(props: MinaLetterSDiamondProps): React.ReactElement;
export default MinaLetterSDiamond;
