import React from 'react';

export interface LanOctopusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctopus: React.FC<LanOctopusProps>;
export default LanOctopus;
