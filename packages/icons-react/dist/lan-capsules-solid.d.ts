import React from 'react';

export interface LanCapsulesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsulesSolid: React.FC<LanCapsulesSolidProps>;
export default LanCapsulesSolid;
