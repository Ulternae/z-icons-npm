import React from 'react';

export interface MinaLetterNDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNDiamondSolid(props: MinaLetterNDiamondSolidProps): React.ReactElement;
export default MinaLetterNDiamondSolid;
