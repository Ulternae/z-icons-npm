import React from 'react';

export interface LanVestPatchesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestPatchesThin(props: LanVestPatchesThinProps): React.ReactElement;
export default LanVestPatchesThin;
