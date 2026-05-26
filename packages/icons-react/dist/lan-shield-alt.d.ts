import React from 'react';

export interface LanShieldAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldAlt: React.FC<LanShieldAltProps>;
export default LanShieldAlt;
