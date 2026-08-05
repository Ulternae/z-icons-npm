import React from 'react';

export interface LanHandsHoldingCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingCircle(props: LanHandsHoldingCircleProps): React.ReactElement;
export default LanHandsHoldingCircle;
