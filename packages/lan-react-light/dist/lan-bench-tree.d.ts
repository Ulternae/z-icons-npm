import React from 'react';

export interface LanBenchTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBenchTree(props: LanBenchTreeProps): React.ReactElement;
export default LanBenchTree;
