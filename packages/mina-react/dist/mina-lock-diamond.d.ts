import React from 'react';

export interface MinaLockDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockDiamond(props: MinaLockDiamondProps): React.ReactElement;
export default MinaLockDiamond;
