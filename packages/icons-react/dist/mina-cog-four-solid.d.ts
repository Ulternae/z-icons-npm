import React from 'react';

export interface MinaCogFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogFourSolid: React.FC<MinaCogFourSolidProps>;
export default MinaCogFourSolid;
