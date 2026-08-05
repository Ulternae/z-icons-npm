import React from 'react';

export interface MinaShieldCrossedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldCrossedSolid(props: MinaShieldCrossedSolidProps): React.ReactElement;
export default MinaShieldCrossedSolid;
