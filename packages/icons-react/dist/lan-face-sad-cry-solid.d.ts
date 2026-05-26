import React from 'react';

export interface LanFaceSadCrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadCrySolid: React.FC<LanFaceSadCrySolidProps>;
export default LanFaceSadCrySolid;
