import React from 'react';

export interface MinaTwoDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoDiamondSolid(props: MinaTwoDiamondSolidProps): React.ReactElement;
export default MinaTwoDiamondSolid;
