import React from 'react';

export interface MinaRewindDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindDiamondSolid(props: MinaRewindDiamondSolidProps): React.ReactElement;
export default MinaRewindDiamondSolid;
