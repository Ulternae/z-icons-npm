import React from 'react';

export interface LanHandsHoldingChildProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingChild(props: LanHandsHoldingChildProps): React.ReactElement;
export default LanHandsHoldingChild;
