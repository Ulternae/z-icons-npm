import React from 'react';

export interface LanMarsAndVenusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsAndVenusThin: React.FC<LanMarsAndVenusThinProps>;
export default LanMarsAndVenusThin;
