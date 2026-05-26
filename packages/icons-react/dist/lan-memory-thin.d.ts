import React from 'react';

export interface LanMemoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoryThin: React.FC<LanMemoryThinProps>;
export default LanMemoryThin;
