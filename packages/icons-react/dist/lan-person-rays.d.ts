import React from 'react';

export interface LanPersonRaysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRays: React.FC<LanPersonRaysProps>;
export default LanPersonRays;
