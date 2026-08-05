import React from 'react';

export interface MinaStopDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopDiamondSolid(props: MinaStopDiamondSolidProps): React.ReactElement;
export default MinaStopDiamondSolid;
