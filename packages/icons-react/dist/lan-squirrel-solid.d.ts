import React from 'react';

export interface LanSquirrelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquirrelSolid: React.FC<LanSquirrelSolidProps>;
export default LanSquirrelSolid;
