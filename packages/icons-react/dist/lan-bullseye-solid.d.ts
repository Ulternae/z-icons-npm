import React from 'react';

export interface LanBullseyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeSolid: React.FC<LanBullseyeSolidProps>;
export default LanBullseyeSolid;
