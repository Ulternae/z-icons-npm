import React from 'react';

export interface NeoLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLinkSolid: React.FC<NeoLinkSolidProps>;
export default NeoLinkSolid;
