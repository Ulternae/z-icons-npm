import React from 'react';

export interface MinaSixDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixDiamond(props: MinaSixDiamondProps): React.ReactElement;
export default MinaSixDiamond;
