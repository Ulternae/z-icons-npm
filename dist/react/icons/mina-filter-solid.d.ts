import React from 'react';

export interface MinaFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilterSolid: React.FC<MinaFilterSolidProps>;
export default MinaFilterSolid;
