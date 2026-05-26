import React from 'react';

export interface LanVestPatchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestPatches: React.FC<LanVestPatchesProps>;
export default LanVestPatches;
