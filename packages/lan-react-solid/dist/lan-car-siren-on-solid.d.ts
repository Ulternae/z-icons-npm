import React from 'react';

export interface LanCarSirenOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenOnSolid(props: LanCarSirenOnSolidProps): React.ReactElement;
export default LanCarSirenOnSolid;
