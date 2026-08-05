import React from 'react';

export interface LanPiscesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiscesThin(props: LanPiscesThinProps): React.ReactElement;
export default LanPiscesThin;
