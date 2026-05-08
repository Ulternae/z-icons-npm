import React from 'react';

export interface MinaDoorOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDoorOpenSolid: React.FC<MinaDoorOpenSolidProps>;
export default MinaDoorOpenSolid;
