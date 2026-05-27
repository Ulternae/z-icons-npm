import React from 'react';

export interface CoreSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSquareSolid: React.FC<CoreSquareSolidProps>;
export default CoreSquareSolid;
