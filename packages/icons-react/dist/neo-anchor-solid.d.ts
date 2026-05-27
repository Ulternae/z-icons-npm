import React from 'react';

export interface NeoAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAnchorSolid: React.FC<NeoAnchorSolidProps>;
export default NeoAnchorSolid;
