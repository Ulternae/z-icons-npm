import React from 'react';

export interface MinaSquareDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareDashedSolid: React.FC<MinaSquareDashedSolidProps>;
export default MinaSquareDashedSolid;
