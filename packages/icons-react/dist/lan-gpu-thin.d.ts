import React from 'react';

export interface LanGpuThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGpuThin: React.FC<LanGpuThinProps>;
export default LanGpuThin;
