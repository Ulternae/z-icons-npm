import React from 'react';

export interface LanHandHoldingSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingSkull(props: LanHandHoldingSkullProps): React.ReactElement;
export default LanHandHoldingSkull;
