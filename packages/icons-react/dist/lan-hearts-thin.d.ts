import React from 'react';

export interface LanHeartsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartsThin: React.FC<LanHeartsThinProps>;
export default LanHeartsThin;
