import React from 'react';

export interface MinaDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDoorClosedSolid: React.FC<MinaDoorClosedSolidProps>;
export default MinaDoorClosedSolid;
