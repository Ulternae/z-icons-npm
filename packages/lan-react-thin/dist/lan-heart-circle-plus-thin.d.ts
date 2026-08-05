import React from 'react';

export interface LanHeartCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCirclePlusThin(props: LanHeartCirclePlusThinProps): React.ReactElement;
export default LanHeartCirclePlusThin;
