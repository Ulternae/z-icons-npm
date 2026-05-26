import React from 'react';

export interface LanCannabisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannabisThin: React.FC<LanCannabisThinProps>;
export default LanCannabisThin;
