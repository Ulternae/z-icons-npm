import React from 'react';

export interface LanFileAiffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAiffSolid: React.FC<LanFileAiffSolidProps>;
export default LanFileAiffSolid;
