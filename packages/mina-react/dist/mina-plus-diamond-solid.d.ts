import React from 'react';

export interface MinaPlusDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusDiamondSolid(props: MinaPlusDiamondSolidProps): React.ReactElement;
export default MinaPlusDiamondSolid;
