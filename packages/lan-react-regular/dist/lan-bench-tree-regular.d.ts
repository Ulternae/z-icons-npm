import React from 'react';

export interface LanBenchTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBenchTreeRegular(props: LanBenchTreeRegularProps): React.ReactElement;
export default LanBenchTreeRegular;
