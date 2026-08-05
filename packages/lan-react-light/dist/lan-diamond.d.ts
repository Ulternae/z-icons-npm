import React from 'react';

export interface LanDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamond(props: LanDiamondProps): React.ReactElement;
export default LanDiamond;
