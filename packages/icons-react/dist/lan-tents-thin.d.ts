import React from 'react';

export interface LanTentsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentsThin: React.FC<LanTentsThinProps>;
export default LanTentsThin;
