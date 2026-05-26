import React from 'react';

export interface LanShieldBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldBlank: React.FC<LanShieldBlankProps>;
export default LanShieldBlank;
