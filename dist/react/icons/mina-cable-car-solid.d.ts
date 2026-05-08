import React from 'react';

export interface MinaCableCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCableCarSolid: React.FC<MinaCableCarSolidProps>;
export default MinaCableCarSolid;
