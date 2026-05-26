import React from 'react';

export interface LanShowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShowerSolid: React.FC<LanShowerSolidProps>;
export default LanShowerSolid;
