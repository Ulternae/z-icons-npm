import React from 'react';

export interface LanHandHoldingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHolding(props: LanHandHoldingProps): React.ReactElement;
export default LanHandHolding;
