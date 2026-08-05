import React from 'react';

export interface MinaSearchDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchDiamond(props: MinaSearchDiamondProps): React.ReactElement;
export default MinaSearchDiamond;
