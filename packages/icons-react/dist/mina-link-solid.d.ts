import React from 'react';

export interface MinaLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLinkSolid: React.FC<MinaLinkSolidProps>;
export default MinaLinkSolid;
