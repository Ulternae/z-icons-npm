import React from 'react';

export interface MinaStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStoreSolid: React.FC<MinaStoreSolidProps>;
export default MinaStoreSolid;
