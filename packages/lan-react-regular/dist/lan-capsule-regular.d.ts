import React from 'react';

export interface LanCapsuleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsuleRegular(props: LanCapsuleRegularProps): React.ReactElement;
export default LanCapsuleRegular;
