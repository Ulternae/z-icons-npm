import React from 'react';

export interface MinaXDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXDiamondSolid(props: MinaXDiamondSolidProps): React.ReactElement;
export default MinaXDiamondSolid;
