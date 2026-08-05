import React from 'react';

export interface LanExplosionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExplosionThin(props: LanExplosionThinProps): React.ReactElement;
export default LanExplosionThin;
