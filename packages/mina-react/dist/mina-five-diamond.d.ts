import React from 'react';

export interface MinaFiveDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveDiamond(props: MinaFiveDiamondProps): React.ReactElement;
export default MinaFiveDiamond;
