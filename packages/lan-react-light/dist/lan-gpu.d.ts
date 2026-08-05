import React from 'react';

export interface LanGpuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGpu(props: LanGpuProps): React.ReactElement;
export default LanGpu;
