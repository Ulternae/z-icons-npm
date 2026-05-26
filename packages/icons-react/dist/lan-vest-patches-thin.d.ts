import React from 'react';

export interface LanVestPatchesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestPatchesThin: React.FC<LanVestPatchesThinProps>;
export default LanVestPatchesThin;
