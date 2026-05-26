import React from 'react';

export interface LanVenusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusThin: React.FC<LanVenusThinProps>;
export default LanVenusThin;
