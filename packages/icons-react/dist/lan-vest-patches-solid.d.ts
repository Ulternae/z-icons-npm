import React from 'react';

export interface LanVestPatchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestPatchesSolid: React.FC<LanVestPatchesSolidProps>;
export default LanVestPatchesSolid;
