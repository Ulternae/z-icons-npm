import React from 'react';

export interface MinaLetterSDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSDiamondSolid(props: MinaLetterSDiamondSolidProps): React.ReactElement;
export default MinaLetterSDiamondSolid;
