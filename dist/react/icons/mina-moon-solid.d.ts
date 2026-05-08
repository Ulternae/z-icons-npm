import React from 'react';

export interface MinaMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoonSolid: React.FC<MinaMoonSolidProps>;
export default MinaMoonSolid;
