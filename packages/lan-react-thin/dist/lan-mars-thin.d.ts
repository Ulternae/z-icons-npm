import React from 'react';

export interface LanMarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsThin(props: LanMarsThinProps): React.ReactElement;
export default LanMarsThin;
