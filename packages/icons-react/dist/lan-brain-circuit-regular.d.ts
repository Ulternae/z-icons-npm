import React from 'react';

export interface LanBrainCircuitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainCircuitRegular: React.FC<LanBrainCircuitRegularProps>;
export default LanBrainCircuitRegular;
