import React from 'react';

export interface MinaEightDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightDiamondSolid(props: MinaEightDiamondSolidProps): React.ReactElement;
export default MinaEightDiamondSolid;
