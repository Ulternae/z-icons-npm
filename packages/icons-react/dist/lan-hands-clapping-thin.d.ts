import React from 'react';

export interface LanHandsClappingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsClappingThin: React.FC<LanHandsClappingThinProps>;
export default LanHandsClappingThin;
