import React from 'react';

export interface LanFishFinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishFinsThin: React.FC<LanFishFinsThinProps>;
export default LanFishFinsThin;
