import React from 'react';

export interface MinaSixDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixDiamondSolid(props: MinaSixDiamondSolidProps): React.ReactElement;
export default MinaSixDiamondSolid;
