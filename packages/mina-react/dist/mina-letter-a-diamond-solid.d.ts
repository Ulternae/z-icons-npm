import React from 'react';

export interface MinaLetterADiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterADiamondSolid(props: MinaLetterADiamondSolidProps): React.ReactElement;
export default MinaLetterADiamondSolid;
