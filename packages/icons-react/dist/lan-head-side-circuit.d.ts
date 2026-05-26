import React from 'react';

export interface LanHeadSideCircuitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCircuit: React.FC<LanHeadSideCircuitProps>;
export default LanHeadSideCircuit;
