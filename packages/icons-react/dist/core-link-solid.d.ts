import React from 'react';

export interface CoreLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLinkSolid: React.FC<CoreLinkSolidProps>;
export default CoreLinkSolid;
