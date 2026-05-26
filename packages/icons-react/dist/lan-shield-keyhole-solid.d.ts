import React from 'react';

export interface LanShieldKeyholeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldKeyholeSolid: React.FC<LanShieldKeyholeSolidProps>;
export default LanShieldKeyholeSolid;
