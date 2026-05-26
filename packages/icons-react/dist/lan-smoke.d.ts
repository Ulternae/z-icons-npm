import React from 'react';

export interface LanSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmoke: React.FC<LanSmokeProps>;
export default LanSmoke;
