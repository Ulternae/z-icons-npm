import React from 'react';

export interface LanVestPatchesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestPatchesSolid(props: LanVestPatchesSolidProps): React.ReactElement;
export default LanVestPatchesSolid;
