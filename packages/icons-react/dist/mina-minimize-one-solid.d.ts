import React from 'react';

export interface MinaMinimizeOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinimizeOneSolid: React.FC<MinaMinimizeOneSolidProps>;
export default MinaMinimizeOneSolid;
