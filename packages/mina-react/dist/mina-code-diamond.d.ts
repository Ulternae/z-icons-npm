import React from 'react';

export interface MinaCodeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeDiamond(props: MinaCodeDiamondProps): React.ReactElement;
export default MinaCodeDiamond;
