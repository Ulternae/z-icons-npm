import React from 'react';

export interface LanEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEqualsThin(props: LanEqualsThinProps): React.ReactElement;
export default LanEqualsThin;
