import React from 'react';

export interface MinaMathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMathSolid: React.FC<MinaMathSolidProps>;
export default MinaMathSolid;
