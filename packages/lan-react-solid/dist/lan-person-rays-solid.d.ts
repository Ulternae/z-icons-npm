import React from 'react';

export interface LanPersonRaysSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRaysSolid(props: LanPersonRaysSolidProps): React.ReactElement;
export default LanPersonRaysSolid;
