import React from 'react';

export interface MinaInfoDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoDiamond(props: MinaInfoDiamondProps): React.ReactElement;
export default MinaInfoDiamond;
