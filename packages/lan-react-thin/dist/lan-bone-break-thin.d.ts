import React from 'react';

export interface LanBoneBreakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneBreakThin(props: LanBoneBreakThinProps): React.ReactElement;
export default LanBoneBreakThin;
