import React from 'react';

export interface LanTrafficConeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficCone: React.FC<LanTrafficConeProps>;
export default LanTrafficCone;
