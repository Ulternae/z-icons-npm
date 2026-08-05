import React from 'react';

export interface LanWindowMinimizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMinimizeThin(props: LanWindowMinimizeThinProps): React.ReactElement;
export default LanWindowMinimizeThin;
