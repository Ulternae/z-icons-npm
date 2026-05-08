import React from 'react';

export interface MinaPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPinSolid: React.FC<MinaPinSolidProps>;
export default MinaPinSolid;
