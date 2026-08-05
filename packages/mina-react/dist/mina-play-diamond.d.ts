import React from 'react';

export interface MinaPlayDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayDiamond(props: MinaPlayDiamondProps): React.ReactElement;
export default MinaPlayDiamond;
