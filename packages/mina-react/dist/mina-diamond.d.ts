import React from 'react';

export interface MinaDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiamond(props: MinaDiamondProps): React.ReactElement;
export default MinaDiamond;
