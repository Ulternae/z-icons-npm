import React from 'react';

export interface MinaThreeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeDiamond(props: MinaThreeDiamondProps): React.ReactElement;
export default MinaThreeDiamond;
