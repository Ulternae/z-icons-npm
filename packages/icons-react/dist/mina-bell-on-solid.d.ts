import React from 'react';

export interface MinaBellOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellOnSolid: React.FC<MinaBellOnSolidProps>;
export default MinaBellOnSolid;
