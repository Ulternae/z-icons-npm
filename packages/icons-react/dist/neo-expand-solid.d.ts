import React from 'react';

export interface NeoExpandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoExpandSolid: React.FC<NeoExpandSolidProps>;
export default NeoExpandSolid;
