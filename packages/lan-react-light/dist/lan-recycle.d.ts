import React from 'react';

export interface LanRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecycle(props: LanRecycleProps): React.ReactElement;
export default LanRecycle;
