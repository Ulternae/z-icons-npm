import React from 'react';

export interface LanFireHydrantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireHydrantSolid: React.FC<LanFireHydrantSolidProps>;
export default LanFireHydrantSolid;
