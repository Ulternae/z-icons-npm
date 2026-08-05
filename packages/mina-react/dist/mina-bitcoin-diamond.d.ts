import React from 'react';

export interface MinaBitcoinDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinDiamond(props: MinaBitcoinDiamondProps): React.ReactElement;
export default MinaBitcoinDiamond;
