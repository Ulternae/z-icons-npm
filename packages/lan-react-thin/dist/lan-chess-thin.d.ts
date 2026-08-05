import React from 'react';

export interface LanChessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessThin(props: LanChessThinProps): React.ReactElement;
export default LanChessThin;
