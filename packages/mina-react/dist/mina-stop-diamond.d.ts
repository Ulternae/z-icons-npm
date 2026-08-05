import React from 'react';

export interface MinaStopDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopDiamond(props: MinaStopDiamondProps): React.ReactElement;
export default MinaStopDiamond;
