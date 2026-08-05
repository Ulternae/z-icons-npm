import React from 'react';

export interface LanBoneBreakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneBreak(props: LanBoneBreakProps): React.ReactElement;
export default LanBoneBreak;
