import React from 'react';

export interface MinaUnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUnionSolid: React.FC<MinaUnionSolidProps>;
export default MinaUnionSolid;
