import React from 'react';

export interface MinaEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroSolid: React.FC<MinaEuroSolidProps>;
export default MinaEuroSolid;
