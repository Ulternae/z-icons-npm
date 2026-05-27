import React from 'react';

export interface NeoBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBackwardSolid: React.FC<NeoBackwardSolidProps>;
export default NeoBackwardSolid;
