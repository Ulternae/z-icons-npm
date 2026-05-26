import React from 'react';

export interface LanFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireSolid: React.FC<LanFireSolidProps>;
export default LanFireSolid;
