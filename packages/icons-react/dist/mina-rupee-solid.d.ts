import React from 'react';

export interface MinaRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeSolid: React.FC<MinaRupeeSolidProps>;
export default MinaRupeeSolid;
