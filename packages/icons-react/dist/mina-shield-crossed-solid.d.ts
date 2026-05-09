import React from 'react';

export interface MinaShieldCrossedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldCrossedSolid: React.FC<MinaShieldCrossedSolidProps>;
export default MinaShieldCrossedSolid;
