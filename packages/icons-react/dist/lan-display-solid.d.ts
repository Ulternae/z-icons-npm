import React from 'react';

export interface LanDisplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplaySolid: React.FC<LanDisplaySolidProps>;
export default LanDisplaySolid;
