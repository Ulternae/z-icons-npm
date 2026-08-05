import React from 'react';

export interface LanExplosionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExplosion(props: LanExplosionProps): React.ReactElement;
export default LanExplosion;
