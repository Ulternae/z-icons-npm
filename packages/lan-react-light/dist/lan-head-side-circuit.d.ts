import React from 'react';

export interface LanHeadSideCircuitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideCircuit(props: LanHeadSideCircuitProps): React.ReactElement;
export default LanHeadSideCircuit;
