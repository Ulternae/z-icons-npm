import React from 'react';

export interface LanGpuSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGpuSolid(props: LanGpuSolidProps): React.ReactElement;
export default LanGpuSolid;
