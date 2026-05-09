import React from 'react';

export interface MinaLocationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSolid: React.FC<MinaLocationSolidProps>;
export default MinaLocationSolid;
