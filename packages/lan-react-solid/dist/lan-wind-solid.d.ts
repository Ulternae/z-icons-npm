import React from 'react';

export interface LanWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindSolid(props: LanWindSolidProps): React.ReactElement;
export default LanWindSolid;
