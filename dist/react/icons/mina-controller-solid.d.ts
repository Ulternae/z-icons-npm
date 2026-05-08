import React from 'react';

export interface MinaControllerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaControllerSolid: React.FC<MinaControllerSolidProps>;
export default MinaControllerSolid;
