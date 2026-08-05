import React from 'react';

export interface LanBenchTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBenchTreeSolid(props: LanBenchTreeSolidProps): React.ReactElement;
export default LanBenchTreeSolid;
