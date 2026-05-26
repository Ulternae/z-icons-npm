import React from 'react';

export interface LanPersonRaysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRaysThin: React.FC<LanPersonRaysThinProps>;
export default LanPersonRaysThin;
