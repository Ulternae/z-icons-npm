import React from 'react';

export interface CoreShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShirtSolid: React.FC<CoreShirtSolidProps>;
export default CoreShirtSolid;
