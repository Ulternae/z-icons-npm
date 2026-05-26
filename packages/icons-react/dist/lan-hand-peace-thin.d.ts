import React from 'react';

export interface LanHandPeaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPeaceThin: React.FC<LanHandPeaceThinProps>;
export default LanHandPeaceThin;
