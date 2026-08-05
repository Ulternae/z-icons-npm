import React from 'react';

export interface LanUsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersThin(props: LanUsersThinProps): React.ReactElement;
export default LanUsersThin;
