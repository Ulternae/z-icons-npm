import React from 'react';

export interface LanCapsulesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsulesThin(props: LanCapsulesThinProps): React.ReactElement;
export default LanCapsulesThin;
