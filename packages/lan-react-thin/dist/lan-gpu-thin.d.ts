import React from 'react';

export interface LanGpuThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGpuThin(props: LanGpuThinProps): React.ReactElement;
export default LanGpuThin;
