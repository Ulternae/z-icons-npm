import React from 'react';

export interface NeoForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoForwardSolid: React.FC<NeoForwardSolidProps>;
export default NeoForwardSolid;
