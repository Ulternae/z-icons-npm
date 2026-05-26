import React from 'react';

export interface LanPersonToPortalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToPortalSolid: React.FC<LanPersonToPortalSolidProps>;
export default LanPersonToPortalSolid;
