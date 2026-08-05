import React from 'react';

export interface LanHandHoldingHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingHandSolid(props: LanHandHoldingHandSolidProps): React.ReactElement;
export default LanHandHoldingHandSolid;
