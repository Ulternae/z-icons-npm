import React from 'react';

export interface LanGaugeCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCirclePlusThin(props: LanGaugeCirclePlusThinProps): React.ReactElement;
export default LanGaugeCirclePlusThin;
