import React from 'react';

export interface LanCapsuleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapsuleSolid: React.FC<LanCapsuleSolidProps>;
export default LanCapsuleSolid;
