import React from 'react';

export interface MinaDotsVerticalDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalDiamond(props: MinaDotsVerticalDiamondProps): React.ReactElement;
export default MinaDotsVerticalDiamond;
