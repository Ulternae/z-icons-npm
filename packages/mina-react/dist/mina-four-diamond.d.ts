import React from 'react';

export interface MinaFourDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourDiamond(props: MinaFourDiamondProps): React.ReactElement;
export default MinaFourDiamond;
