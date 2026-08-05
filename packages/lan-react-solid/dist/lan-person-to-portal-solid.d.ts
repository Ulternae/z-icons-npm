import React from 'react';

export interface LanPersonToPortalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToPortalSolid(props: LanPersonToPortalSolidProps): React.ReactElement;
export default LanPersonToPortalSolid;
