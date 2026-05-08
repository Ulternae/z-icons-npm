import React from 'react';

export interface MinaRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRulerSolid: React.FC<MinaRulerSolidProps>;
export default MinaRulerSolid;
