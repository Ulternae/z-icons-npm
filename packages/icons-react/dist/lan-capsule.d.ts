import React from 'react';

export interface LanCapsuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsule: React.FC<LanCapsuleProps>;
export default LanCapsule;
