import React from 'react';

export interface LanImageCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCirclePlusThin(props: LanImageCirclePlusThinProps): React.ReactElement;
export default LanImageCirclePlusThin;
