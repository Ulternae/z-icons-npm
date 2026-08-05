import React from 'react';

export interface MinaDotsDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsDiamondSolid(props: MinaDotsDiamondSolidProps): React.ReactElement;
export default MinaDotsDiamondSolid;
