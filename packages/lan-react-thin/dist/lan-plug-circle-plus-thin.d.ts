import React from 'react';

export interface LanPlugCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCirclePlusThin(props: LanPlugCirclePlusThinProps): React.ReactElement;
export default LanPlugCirclePlusThin;
