import React from 'react';

export interface MinaNineDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineDiamond(props: MinaNineDiamondProps): React.ReactElement;
export default MinaNineDiamond;
