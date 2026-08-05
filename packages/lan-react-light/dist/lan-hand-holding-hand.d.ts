import React from 'react';

export interface LanHandHoldingHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingHand(props: LanHandHoldingHandProps): React.ReactElement;
export default LanHandHoldingHand;
