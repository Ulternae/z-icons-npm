import React from 'react';

export interface MinaAsteriskDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskDiamondSolid(props: MinaAsteriskDiamondSolidProps): React.ReactElement;
export default MinaAsteriskDiamondSolid;
