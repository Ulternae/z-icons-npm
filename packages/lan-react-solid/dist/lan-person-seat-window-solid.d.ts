import React from 'react';

export interface LanPersonSeatWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatWindowSolid(props: LanPersonSeatWindowSolidProps): React.ReactElement;
export default LanPersonSeatWindowSolid;
