import React from 'react';

export interface MinaCheckDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckDiamond(props: MinaCheckDiamondProps): React.ReactElement;
export default MinaCheckDiamond;
