import React from 'react';

export interface MinaTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTagSolid: React.FC<MinaTagSolidProps>;
export default MinaTagSolid;
