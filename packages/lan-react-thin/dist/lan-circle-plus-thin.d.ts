import React from 'react';

export interface LanCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlusThin(props: LanCirclePlusThinProps): React.ReactElement;
export default LanCirclePlusThin;
