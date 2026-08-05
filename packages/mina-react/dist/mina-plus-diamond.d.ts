import React from 'react';

export interface MinaPlusDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusDiamond(props: MinaPlusDiamondProps): React.ReactElement;
export default MinaPlusDiamond;
