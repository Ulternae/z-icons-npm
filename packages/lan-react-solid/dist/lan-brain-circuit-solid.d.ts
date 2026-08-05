import React from 'react';

export interface LanBrainCircuitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainCircuitSolid(props: LanBrainCircuitSolidProps): React.ReactElement;
export default LanBrainCircuitSolid;
