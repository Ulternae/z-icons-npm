import React from 'react';

export interface MinaZeroDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroDiamond(props: MinaZeroDiamondProps): React.ReactElement;
export default MinaZeroDiamond;
