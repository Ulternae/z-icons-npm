import React from 'react';

export interface LanFileCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCirclePlusThin(props: LanFileCirclePlusThinProps): React.ReactElement;
export default LanFileCirclePlusThin;
