import React from 'react';

export interface LanVenusMarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusMarsThin(props: LanVenusMarsThinProps): React.ReactElement;
export default LanVenusMarsThin;
