import React from 'react';

export interface MinaBoatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBoatSolid: React.FC<MinaBoatSolidProps>;
export default MinaBoatSolid;
