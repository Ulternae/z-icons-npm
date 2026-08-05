import React from 'react';

export interface LanUserMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMinusThin(props: LanUserMinusThinProps): React.ReactElement;
export default LanUserMinusThin;
