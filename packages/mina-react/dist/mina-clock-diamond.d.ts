import React from 'react';

export interface MinaClockDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockDiamond(props: MinaClockDiamondProps): React.ReactElement;
export default MinaClockDiamond;
