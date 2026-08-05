import React from 'react';

export interface LanHandsHoldingChildSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingChildSolid(props: LanHandsHoldingChildSolidProps): React.ReactElement;
export default LanHandsHoldingChildSolid;
