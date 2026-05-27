import React from 'react';

export interface CoreFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileSolid: React.FC<CoreFileSolidProps>;
export default CoreFileSolid;
