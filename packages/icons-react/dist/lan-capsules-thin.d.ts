import React from 'react';

export interface LanCapsulesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsulesThin: React.FC<LanCapsulesThinProps>;
export default LanCapsulesThin;
