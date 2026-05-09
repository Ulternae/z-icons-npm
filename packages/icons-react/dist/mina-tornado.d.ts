import React from 'react';

export interface MinaTornadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTornado: React.FC<MinaTornadoProps>;
export default MinaTornado;
