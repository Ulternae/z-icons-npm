import React from 'react';

export interface MinaThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeSolid: React.FC<MinaThreeSolidProps>;
export default MinaThreeSolid;
