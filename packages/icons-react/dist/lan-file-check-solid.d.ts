import React from 'react';

export interface LanFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCheckSolid: React.FC<LanFileCheckSolidProps>;
export default LanFileCheckSolid;
