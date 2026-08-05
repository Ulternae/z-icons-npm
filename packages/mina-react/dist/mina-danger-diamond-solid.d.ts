import React from 'react';

export interface MinaDangerDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerDiamondSolid(props: MinaDangerDiamondSolidProps): React.ReactElement;
export default MinaDangerDiamondSolid;
