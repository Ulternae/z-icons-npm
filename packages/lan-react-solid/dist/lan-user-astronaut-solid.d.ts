import React from 'react';

export interface LanUserAstronautSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAstronautSolid(props: LanUserAstronautSolidProps): React.ReactElement;
export default LanUserAstronautSolid;
