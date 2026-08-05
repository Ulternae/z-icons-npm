import React from 'react';

export interface LanBoneBreakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneBreakRegular(props: LanBoneBreakRegularProps): React.ReactElement;
export default LanBoneBreakRegular;
