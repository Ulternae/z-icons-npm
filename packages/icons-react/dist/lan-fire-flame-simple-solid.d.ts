import React from 'react';

export interface LanFireFlameSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameSimpleSolid: React.FC<LanFireFlameSimpleSolidProps>;
export default LanFireFlameSimpleSolid;
