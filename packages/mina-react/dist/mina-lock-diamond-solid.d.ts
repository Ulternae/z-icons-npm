import React from 'react';

export interface MinaLockDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockDiamondSolid(props: MinaLockDiamondSolidProps): React.ReactElement;
export default MinaLockDiamondSolid;
