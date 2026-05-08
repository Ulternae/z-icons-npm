import React from 'react';

export interface MinaMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveSolid: React.FC<MinaMoveSolidProps>;
export default MinaMoveSolid;
