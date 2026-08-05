import React from 'react';

export interface LanHandsHoldingDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingDiamond(props: LanHandsHoldingDiamondProps): React.ReactElement;
export default LanHandsHoldingDiamond;
