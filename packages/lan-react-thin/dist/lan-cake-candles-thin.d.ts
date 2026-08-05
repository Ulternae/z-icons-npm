import React from 'react';

export interface LanCakeCandlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeCandlesThin(props: LanCakeCandlesThinProps): React.ReactElement;
export default LanCakeCandlesThin;
