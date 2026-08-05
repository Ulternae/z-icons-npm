import React from 'react';

export interface LanExplosionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExplosionSolid(props: LanExplosionSolidProps): React.ReactElement;
export default LanExplosionSolid;
