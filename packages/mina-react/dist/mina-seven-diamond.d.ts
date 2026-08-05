import React from 'react';

export interface MinaSevenDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenDiamond(props: MinaSevenDiamondProps): React.ReactElement;
export default MinaSevenDiamond;
