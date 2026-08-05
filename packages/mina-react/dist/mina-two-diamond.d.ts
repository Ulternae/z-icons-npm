import React from 'react';

export interface MinaTwoDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoDiamond(props: MinaTwoDiamondProps): React.ReactElement;
export default MinaTwoDiamond;
