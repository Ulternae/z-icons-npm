import React from 'react';

export interface LanFileAwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAwardSolid: React.FC<LanFileAwardSolidProps>;
export default LanFileAwardSolid;
