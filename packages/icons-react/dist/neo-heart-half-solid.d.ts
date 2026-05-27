import React from 'react';

export interface NeoHeartHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeartHalfSolid: React.FC<NeoHeartHalfSolidProps>;
export default NeoHeartHalfSolid;
