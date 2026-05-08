import React from 'react';

export interface MinaForwardCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardCircleSolid: React.FC<MinaForwardCircleSolidProps>;
export default MinaForwardCircleSolid;
