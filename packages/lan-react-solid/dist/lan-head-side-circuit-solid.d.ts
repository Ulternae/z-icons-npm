import React from 'react';

export interface LanHeadSideCircuitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideCircuitSolid(props: LanHeadSideCircuitSolidProps): React.ReactElement;
export default LanHeadSideCircuitSolid;
