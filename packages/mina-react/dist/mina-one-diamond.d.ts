import React from 'react';

export interface MinaOneDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneDiamond(props: MinaOneDiamondProps): React.ReactElement;
export default MinaOneDiamond;
