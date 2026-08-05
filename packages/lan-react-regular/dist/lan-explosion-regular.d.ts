import React from 'react';

export interface LanExplosionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExplosionRegular(props: LanExplosionRegularProps): React.ReactElement;
export default LanExplosionRegular;
