import React from 'react';

export interface LanHandHoldingStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingStarSolid(props: LanHandHoldingStarSolidProps): React.ReactElement;
export default LanHandHoldingStarSolid;
