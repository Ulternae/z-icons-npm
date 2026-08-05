import React from 'react';

export interface MinaClockDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockDiamondSolid(props: MinaClockDiamondSolidProps): React.ReactElement;
export default MinaClockDiamondSolid;
