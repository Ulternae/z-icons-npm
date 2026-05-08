import React from 'react';

export interface MinaFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourSolid: React.FC<MinaFourSolidProps>;
export default MinaFourSolid;
