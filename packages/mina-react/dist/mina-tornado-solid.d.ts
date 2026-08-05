import React from 'react';

export interface MinaTornadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTornadoSolid(props: MinaTornadoSolidProps): React.ReactElement;
export default MinaTornadoSolid;
