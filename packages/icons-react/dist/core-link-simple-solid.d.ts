import React from 'react';

export interface CoreLinkSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLinkSimpleSolid: React.FC<CoreLinkSimpleSolidProps>;
export default CoreLinkSimpleSolid;
