import React from 'react';

export interface MinaDollarDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarDiamond(props: MinaDollarDiamondProps): React.ReactElement;
export default MinaDollarDiamond;
