import React from 'react';

export interface LanDialHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialHighSolid: React.FC<LanDialHighSolidProps>;
export default LanDialHighSolid;
