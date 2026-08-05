import React from 'react';

export interface LanHandHoldingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingThin(props: LanHandHoldingThinProps): React.ReactElement;
export default LanHandHoldingThin;
