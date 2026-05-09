import React from 'react';

export interface MinaSubtractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSubtractSolid: React.FC<MinaSubtractSolidProps>;
export default MinaSubtractSolid;
