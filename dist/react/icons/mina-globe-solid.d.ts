import React from 'react';

export interface MinaGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGlobeSolid: React.FC<MinaGlobeSolidProps>;
export default MinaGlobeSolid;
