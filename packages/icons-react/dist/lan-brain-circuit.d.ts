import React from 'react';

export interface LanBrainCircuitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainCircuit: React.FC<LanBrainCircuitProps>;
export default LanBrainCircuit;
