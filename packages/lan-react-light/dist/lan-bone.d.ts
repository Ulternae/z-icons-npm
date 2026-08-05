import React from 'react';

export interface LanBoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBone(props: LanBoneProps): React.ReactElement;
export default LanBone;
