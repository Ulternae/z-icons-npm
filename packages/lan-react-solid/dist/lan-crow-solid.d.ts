import React from 'react';

export interface LanCrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrowSolid(props: LanCrowSolidProps): React.ReactElement;
export default LanCrowSolid;
