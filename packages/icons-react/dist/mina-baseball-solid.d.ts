import React from 'react';

export interface MinaBaseballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBaseballSolid: React.FC<MinaBaseballSolidProps>;
export default MinaBaseballSolid;
