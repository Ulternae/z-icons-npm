import React from 'react';

export interface LanHandHoldingStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingStarThin(props: LanHandHoldingStarThinProps): React.ReactElement;
export default LanHandHoldingStarThin;
