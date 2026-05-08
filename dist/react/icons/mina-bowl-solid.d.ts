import React from 'react';

export interface MinaBowlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBowlSolid: React.FC<MinaBowlSolidProps>;
export default MinaBowlSolid;
