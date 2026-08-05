import React from 'react';

export interface LanHandsHoldingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHolding(props: LanHandsHoldingProps): React.ReactElement;
export default LanHandsHolding;
