import React from 'react';

export interface MinaEuroDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroDiamondSolid(props: MinaEuroDiamondSolidProps): React.ReactElement;
export default MinaEuroDiamondSolid;
