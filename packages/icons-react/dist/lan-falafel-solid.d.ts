import React from 'react';

export interface LanFalafelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFalafelSolid: React.FC<LanFalafelSolidProps>;
export default LanFalafelSolid;
