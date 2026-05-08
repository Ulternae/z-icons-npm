import React from 'react';

export interface MinaBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellSolid: React.FC<MinaBellSolidProps>;
export default MinaBellSolid;
