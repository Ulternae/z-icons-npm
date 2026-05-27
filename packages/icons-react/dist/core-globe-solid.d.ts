import React from 'react';

export interface CoreGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGlobeSolid: React.FC<CoreGlobeSolidProps>;
export default CoreGlobeSolid;
