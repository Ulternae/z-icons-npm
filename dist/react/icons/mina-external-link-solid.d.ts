import React from 'react';

export interface MinaExternalLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaExternalLinkSolid: React.FC<MinaExternalLinkSolidProps>;
export default MinaExternalLinkSolid;
