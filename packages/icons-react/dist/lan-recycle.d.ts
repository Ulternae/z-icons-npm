import React from 'react';

export interface LanRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecycle: React.FC<LanRecycleProps>;
export default LanRecycle;
