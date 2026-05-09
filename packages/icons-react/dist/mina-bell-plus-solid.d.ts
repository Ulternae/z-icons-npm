import React from 'react';

export interface MinaBellPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellPlusSolid: React.FC<MinaBellPlusSolidProps>;
export default MinaBellPlusSolid;
