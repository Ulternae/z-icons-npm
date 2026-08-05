import React from 'react';

export interface LanHandHoldingMagicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingMagicThin(props: LanHandHoldingMagicThinProps): React.ReactElement;
export default LanHandHoldingMagicThin;
