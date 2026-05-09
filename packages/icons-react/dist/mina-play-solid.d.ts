import React from 'react';

export interface MinaPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlaySolid: React.FC<MinaPlaySolidProps>;
export default MinaPlaySolid;
