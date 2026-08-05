import React from 'react';

export interface MinaLetterPDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPDiamondSolid(props: MinaLetterPDiamondSolidProps): React.ReactElement;
export default MinaLetterPDiamondSolid;
