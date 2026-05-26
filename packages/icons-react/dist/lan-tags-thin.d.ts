import React from 'react';

export interface LanTagsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagsThin: React.FC<LanTagsThinProps>;
export default LanTagsThin;
