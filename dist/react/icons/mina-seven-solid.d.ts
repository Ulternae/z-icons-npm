import React from 'react';

export interface MinaSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenSolid: React.FC<MinaSevenSolidProps>;
export default MinaSevenSolid;
