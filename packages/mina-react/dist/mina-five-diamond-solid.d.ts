import React from 'react';

export interface MinaFiveDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveDiamondSolid(props: MinaFiveDiamondSolidProps): React.ReactElement;
export default MinaFiveDiamondSolid;
