import React from 'react';

export interface MinaCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeSolid: React.FC<MinaCodeSolidProps>;
export default MinaCodeSolid;
