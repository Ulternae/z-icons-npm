import React from 'react';

export interface LanShieldKeyholeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldKeyholeThin: React.FC<LanShieldKeyholeThinProps>;
export default LanShieldKeyholeThin;
