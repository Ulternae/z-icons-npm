import React from 'react';

export interface LanPersonCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCirclePlusThin(props: LanPersonCirclePlusThinProps): React.ReactElement;
export default LanPersonCirclePlusThin;
