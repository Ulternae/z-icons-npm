import React from 'react';

export interface MinaFineTuneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFineTuneSolid: React.FC<MinaFineTuneSolidProps>;
export default MinaFineTuneSolid;
