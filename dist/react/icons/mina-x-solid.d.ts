import React from 'react';

export interface MinaXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXSolid: React.FC<MinaXSolidProps>;
export default MinaXSolid;
