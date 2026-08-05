import React from 'react';

export interface MinaForwardDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardDiamond(props: MinaForwardDiamondProps): React.ReactElement;
export default MinaForwardDiamond;
