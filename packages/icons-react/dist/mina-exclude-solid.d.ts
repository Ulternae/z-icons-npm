import React from 'react';

export interface MinaExcludeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaExcludeSolid: React.FC<MinaExcludeSolidProps>;
export default MinaExcludeSolid;
