import React from 'react';

export interface MinaDotsDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsDiamond(props: MinaDotsDiamondProps): React.ReactElement;
export default MinaDotsDiamond;
