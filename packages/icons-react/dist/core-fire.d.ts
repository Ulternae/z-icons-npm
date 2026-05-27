import React from 'react';

export interface CoreFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFire: React.FC<CoreFireProps>;
export default CoreFire;
