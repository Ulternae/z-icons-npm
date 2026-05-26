import React from 'react';

export interface LanCapsuleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsuleThin: React.FC<LanCapsuleThinProps>;
export default LanCapsuleThin;
