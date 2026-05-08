import React from 'react';

export interface MinaYenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenSolid: React.FC<MinaYenSolidProps>;
export default MinaYenSolid;
