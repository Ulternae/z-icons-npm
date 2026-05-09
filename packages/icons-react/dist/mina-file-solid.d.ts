import React from 'react';

export interface MinaFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileSolid: React.FC<MinaFileSolidProps>;
export default MinaFileSolid;
