import React from 'react';

export interface LanKazooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKazooSolid: React.FC<LanKazooSolidProps>;
export default LanKazooSolid;
