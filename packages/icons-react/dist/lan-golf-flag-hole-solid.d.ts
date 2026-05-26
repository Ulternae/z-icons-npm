import React from 'react';

export interface LanGolfFlagHoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfFlagHoleSolid: React.FC<LanGolfFlagHoleSolidProps>;
export default LanGolfFlagHoleSolid;
