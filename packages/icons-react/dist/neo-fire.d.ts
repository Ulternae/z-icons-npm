import React from 'react';

export interface NeoFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFire: React.FC<NeoFireProps>;
export default NeoFire;
