import React from 'react';

export interface MinaTornadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTornado(props: MinaTornadoProps): React.ReactElement;
export default MinaTornado;
