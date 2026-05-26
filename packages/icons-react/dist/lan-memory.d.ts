import React from 'react';

export interface LanMemoryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemory: React.FC<LanMemoryProps>;
export default LanMemory;
