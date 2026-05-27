import React from 'react';

export interface CoreStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStoreSolid: React.FC<CoreStoreSolidProps>;
export default CoreStoreSolid;
