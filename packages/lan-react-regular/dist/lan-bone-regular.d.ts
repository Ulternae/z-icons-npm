import React from 'react';

export interface LanBoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneRegular(props: LanBoneRegularProps): React.ReactElement;
export default LanBoneRegular;
