import React from 'react';

export interface LanAwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardSolid: React.FC<LanAwardSolidProps>;
export default LanAwardSolid;
