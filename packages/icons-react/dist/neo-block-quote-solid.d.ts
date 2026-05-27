import React from 'react';

export interface NeoBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBlockQuoteSolid: React.FC<NeoBlockQuoteSolidProps>;
export default NeoBlockQuoteSolid;
