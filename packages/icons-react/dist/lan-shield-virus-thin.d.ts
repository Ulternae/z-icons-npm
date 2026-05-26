import React from 'react';

export interface LanShieldVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldVirusThin: React.FC<LanShieldVirusThinProps>;
export default LanShieldVirusThin;
