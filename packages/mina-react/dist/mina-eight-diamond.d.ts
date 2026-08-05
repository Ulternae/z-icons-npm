import React from 'react';

export interface MinaEightDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightDiamond(props: MinaEightDiamondProps): React.ReactElement;
export default MinaEightDiamond;
