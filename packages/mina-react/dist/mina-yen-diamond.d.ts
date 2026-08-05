import React from 'react';

export interface MinaYenDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenDiamond(props: MinaYenDiamondProps): React.ReactElement;
export default MinaYenDiamond;
