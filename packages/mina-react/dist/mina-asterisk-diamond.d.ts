import React from 'react';

export interface MinaAsteriskDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskDiamond(props: MinaAsteriskDiamondProps): React.ReactElement;
export default MinaAsteriskDiamond;
