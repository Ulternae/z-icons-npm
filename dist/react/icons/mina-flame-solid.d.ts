import React from 'react';

export interface MinaFlameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlameSolid: React.FC<MinaFlameSolidProps>;
export default MinaFlameSolid;
