import React from 'react';

export interface MinaXDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXDiamond(props: MinaXDiamondProps): React.ReactElement;
export default MinaXDiamond;
