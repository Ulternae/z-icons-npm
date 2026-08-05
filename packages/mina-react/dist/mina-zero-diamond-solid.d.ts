import React from 'react';

export interface MinaZeroDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroDiamondSolid(props: MinaZeroDiamondSolidProps): React.ReactElement;
export default MinaZeroDiamondSolid;
