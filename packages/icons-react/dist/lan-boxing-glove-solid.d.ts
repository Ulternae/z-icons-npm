import React from 'react';

export interface LanBoxingGloveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxingGloveSolid: React.FC<LanBoxingGloveSolidProps>;
export default LanBoxingGloveSolid;
