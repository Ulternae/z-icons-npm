import React from 'react';

export interface LanGpuRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGpuRegular(props: LanGpuRegularProps): React.ReactElement;
export default LanGpuRegular;
