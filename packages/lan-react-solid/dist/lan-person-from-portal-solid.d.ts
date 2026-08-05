import React from 'react';

export interface LanPersonFromPortalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFromPortalSolid(props: LanPersonFromPortalSolidProps): React.ReactElement;
export default LanPersonFromPortalSolid;
