import React from 'react';

export interface LanVestPatchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestPatches(props: LanVestPatchesProps): React.ReactElement;
export default LanVestPatches;
