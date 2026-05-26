import React from 'react';

export interface LanSquareTengeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTengeSolid: React.FC<LanSquareTengeSolidProps>;
export default LanSquareTengeSolid;
