import React from 'react';

export interface MinaActivitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaActivitySolid: React.FC<MinaActivitySolidProps>;
export default MinaActivitySolid;
