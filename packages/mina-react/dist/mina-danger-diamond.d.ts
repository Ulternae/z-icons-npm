import React from 'react';

export interface MinaDangerDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerDiamond(props: MinaDangerDiamondProps): React.ReactElement;
export default MinaDangerDiamond;
