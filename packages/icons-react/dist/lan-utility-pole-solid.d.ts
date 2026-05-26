import React from 'react';

export interface LanUtilityPoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityPoleSolid: React.FC<LanUtilityPoleSolidProps>;
export default LanUtilityPoleSolid;
