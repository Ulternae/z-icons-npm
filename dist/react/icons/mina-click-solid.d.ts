import React from 'react';

export interface MinaClickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClickSolid: React.FC<MinaClickSolidProps>;
export default MinaClickSolid;
