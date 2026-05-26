import React from 'react';

export interface LanBookUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookUserSolid: React.FC<LanBookUserSolidProps>;
export default LanBookUserSolid;
