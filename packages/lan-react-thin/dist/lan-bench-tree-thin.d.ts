import React from 'react';

export interface LanBenchTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBenchTreeThin(props: LanBenchTreeThinProps): React.ReactElement;
export default LanBenchTreeThin;
