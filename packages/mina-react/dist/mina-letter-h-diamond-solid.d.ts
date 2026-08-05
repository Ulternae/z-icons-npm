import React from 'react';

export interface MinaLetterHDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHDiamondSolid(props: MinaLetterHDiamondSolidProps): React.ReactElement;
export default MinaLetterHDiamondSolid;
