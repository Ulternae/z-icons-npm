import React from 'react';

export interface LanOctopusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctopusThin: React.FC<LanOctopusThinProps>;
export default LanOctopusThin;
