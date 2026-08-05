import React from 'react';

export interface LanFenceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFence(props: LanFenceProps): React.ReactElement;
export default LanFence;
