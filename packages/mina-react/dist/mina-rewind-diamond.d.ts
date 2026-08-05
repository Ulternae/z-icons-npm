import React from 'react';

export interface MinaRewindDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindDiamond(props: MinaRewindDiamondProps): React.ReactElement;
export default MinaRewindDiamond;
