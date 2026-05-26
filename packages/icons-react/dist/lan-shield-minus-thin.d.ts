import React from 'react';

export interface LanShieldMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldMinusThin: React.FC<LanShieldMinusThinProps>;
export default LanShieldMinusThin;
