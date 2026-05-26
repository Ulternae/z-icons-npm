import React from 'react';

export interface LanShieldVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldVirusSolid: React.FC<LanShieldVirusSolidProps>;
export default LanShieldVirusSolid;
