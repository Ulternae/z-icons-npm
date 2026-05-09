import React from 'react';

export interface MinaFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFireSolid: React.FC<MinaFireSolidProps>;
export default MinaFireSolid;
