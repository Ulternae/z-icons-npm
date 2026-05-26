import React from 'react';

export interface LanBrainCircuitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainCircuitThin: React.FC<LanBrainCircuitThinProps>;
export default LanBrainCircuitThin;
