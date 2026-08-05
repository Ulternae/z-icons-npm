import React from 'react';

export interface MinaPauseDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseDiamondSolid(props: MinaPauseDiamondSolidProps): React.ReactElement;
export default MinaPauseDiamondSolid;
