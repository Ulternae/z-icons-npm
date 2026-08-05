import React from 'react';

export interface MinaMinusDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusDiamondSolid(props: MinaMinusDiamondSolidProps): React.ReactElement;
export default MinaMinusDiamondSolid;
