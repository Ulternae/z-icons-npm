import React from 'react';

export interface MinaCogTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogTwoSolid: React.FC<MinaCogTwoSolidProps>;
export default MinaCogTwoSolid;
