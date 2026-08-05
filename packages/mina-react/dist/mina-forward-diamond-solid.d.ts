import React from 'react';

export interface MinaForwardDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardDiamondSolid(props: MinaForwardDiamondSolidProps): React.ReactElement;
export default MinaForwardDiamondSolid;
