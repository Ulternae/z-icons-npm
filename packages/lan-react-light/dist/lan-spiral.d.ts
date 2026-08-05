import React from 'react';

export interface LanSpiralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiral(props: LanSpiralProps): React.ReactElement;
export default LanSpiral;
