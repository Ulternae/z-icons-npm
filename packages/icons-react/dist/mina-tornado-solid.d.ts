import React from 'react';

export interface MinaTornadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTornadoSolid: React.FC<MinaTornadoSolidProps>;
export default MinaTornadoSolid;
