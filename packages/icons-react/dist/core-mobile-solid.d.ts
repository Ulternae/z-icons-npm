import React from 'react';

export interface CoreMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMobileSolid: React.FC<CoreMobileSolidProps>;
export default CoreMobileSolid;
