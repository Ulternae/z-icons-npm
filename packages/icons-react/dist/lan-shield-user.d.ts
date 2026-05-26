import React from 'react';

export interface LanShieldUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldUser: React.FC<LanShieldUserProps>;
export default LanShieldUser;
