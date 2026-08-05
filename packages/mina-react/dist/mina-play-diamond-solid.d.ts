import React from 'react';

export interface MinaPlayDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayDiamondSolid(props: MinaPlayDiamondSolidProps): React.ReactElement;
export default MinaPlayDiamondSolid;
