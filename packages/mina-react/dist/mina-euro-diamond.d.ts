import React from 'react';

export interface MinaEuroDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroDiamond(props: MinaEuroDiamondProps): React.ReactElement;
export default MinaEuroDiamond;
