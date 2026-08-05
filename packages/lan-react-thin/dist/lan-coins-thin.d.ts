import React from 'react';

export interface LanCoinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinsThin(props: LanCoinsThinProps): React.ReactElement;
export default LanCoinsThin;
