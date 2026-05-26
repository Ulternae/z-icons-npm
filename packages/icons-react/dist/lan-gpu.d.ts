import React from 'react';

export interface LanGpuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGpu: React.FC<LanGpuProps>;
export default LanGpu;
