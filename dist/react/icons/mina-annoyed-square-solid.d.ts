import React from 'react';

export interface MinaAnnoyedSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedSquareSolid: React.FC<MinaAnnoyedSquareSolidProps>;
export default MinaAnnoyedSquareSolid;
