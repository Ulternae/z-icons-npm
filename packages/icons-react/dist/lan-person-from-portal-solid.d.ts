import React from 'react';

export interface LanPersonFromPortalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFromPortalSolid: React.FC<LanPersonFromPortalSolidProps>;
export default LanPersonFromPortalSolid;
