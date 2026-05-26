import React from 'react';

export interface LanGpuSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGpuSolid: React.FC<LanGpuSolidProps>;
export default LanGpuSolid;
