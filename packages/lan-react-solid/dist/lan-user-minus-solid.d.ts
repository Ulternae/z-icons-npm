import React from 'react';

export interface LanUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMinusSolid(props: LanUserMinusSolidProps): React.ReactElement;
export default LanUserMinusSolid;
