import React from 'react';

export interface LanWindowMaximizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMaximizeThin(props: LanWindowMaximizeThinProps): React.ReactElement;
export default LanWindowMaximizeThin;
