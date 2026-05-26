import React from 'react';

export interface LanFireSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireSmoke: React.FC<LanFireSmokeProps>;
export default LanFireSmoke;
