import React from 'react';

export interface LanFenceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFence: React.FC<LanFenceProps>;
export default LanFence;
