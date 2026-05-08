import React from 'react';

export interface MinaLocationHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationHomeSolid: React.FC<MinaLocationHomeSolidProps>;
export default MinaLocationHomeSolid;
