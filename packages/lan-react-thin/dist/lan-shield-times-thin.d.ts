import React from 'react';

export interface LanShieldTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldTimesThin(props: LanShieldTimesThinProps): React.ReactElement;
export default LanShieldTimesThin;
