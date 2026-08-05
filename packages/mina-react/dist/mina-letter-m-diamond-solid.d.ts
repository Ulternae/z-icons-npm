import React from 'react';

export interface MinaLetterMDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMDiamondSolid(props: MinaLetterMDiamondSolidProps): React.ReactElement;
export default MinaLetterMDiamondSolid;
