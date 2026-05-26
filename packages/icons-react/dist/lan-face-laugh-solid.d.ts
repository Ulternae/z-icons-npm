import React from 'react';

export interface LanFaceLaughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughSolid: React.FC<LanFaceLaughSolidProps>;
export default LanFaceLaughSolid;
