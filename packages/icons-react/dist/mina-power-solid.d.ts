import React from 'react';

export interface MinaPowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPowerSolid: React.FC<MinaPowerSolidProps>;
export default MinaPowerSolid;
