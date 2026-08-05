import React from 'react';

export interface LanPersonSeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatSolid(props: LanPersonSeatSolidProps): React.ReactElement;
export default LanPersonSeatSolid;
