import React from 'react';

export interface MinaHashDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashDiamond(props: MinaHashDiamondProps): React.ReactElement;
export default MinaHashDiamond;
