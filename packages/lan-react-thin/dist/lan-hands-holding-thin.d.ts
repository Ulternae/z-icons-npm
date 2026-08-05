import React from 'react';

export interface LanHandsHoldingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingThin(props: LanHandsHoldingThinProps): React.ReactElement;
export default LanHandsHoldingThin;
