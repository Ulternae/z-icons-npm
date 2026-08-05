import React from 'react';

export interface MinaMinusDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusDiamond(props: MinaMinusDiamondProps): React.ReactElement;
export default MinaMinusDiamond;
