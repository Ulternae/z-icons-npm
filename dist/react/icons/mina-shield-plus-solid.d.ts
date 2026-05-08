import React from 'react';

export interface MinaShieldPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldPlusSolid: React.FC<MinaShieldPlusSolidProps>;
export default MinaShieldPlusSolid;
