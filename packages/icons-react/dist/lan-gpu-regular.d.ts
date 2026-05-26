import React from 'react';

export interface LanGpuRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGpuRegular: React.FC<LanGpuRegularProps>;
export default LanGpuRegular;
