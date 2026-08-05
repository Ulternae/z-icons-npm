import React from 'react';

export interface LanShieldCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCrossSolid(props: LanShieldCrossSolidProps): React.ReactElement;
export default LanShieldCrossSolid;
