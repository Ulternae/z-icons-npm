import React from 'react';

export interface LanBrainCircuitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainCircuit(props: LanBrainCircuitProps): React.ReactElement;
export default LanBrainCircuit;
