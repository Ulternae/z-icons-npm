import React from 'react';

export interface MinaDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiamondSolid(props: MinaDiamondSolidProps): React.ReactElement;
export default MinaDiamondSolid;
