import React from 'react';

export interface MinaFiveSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveSquareSolid: React.FC<MinaFiveSquareSolidProps>;
export default MinaFiveSquareSolid;
