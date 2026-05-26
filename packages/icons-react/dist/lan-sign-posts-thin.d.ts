import React from 'react';

export interface LanSignPostsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsThin: React.FC<LanSignPostsThinProps>;
export default LanSignPostsThin;
