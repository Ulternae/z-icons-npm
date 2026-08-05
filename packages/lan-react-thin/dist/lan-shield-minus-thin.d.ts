import React from 'react';

export interface LanShieldMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldMinusThin(props: LanShieldMinusThinProps): React.ReactElement;
export default LanShieldMinusThin;
